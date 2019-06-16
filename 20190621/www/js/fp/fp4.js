"use strict";

/*
 * Stateオブジェクトのインターフェイス
 * {
 *  value: string
 *  valid: boolean
 *  message: string
 * }
 */

// exportしやすいように1つのオブジェクトにまとめちゃう
const Validator = {};
/**
 * valueを半角にする
 */
Validator.modifyToAscii = function(state) {
  function toAscii(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９＠．]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    }).replace(/[ー−―‐]/, "-");
  }
  return {
    ...state,
    value: toAscii(state.value)
  };
}
/**
 * valueを小文字にする
 */
Validator.modifyToLower = function(state) {
  return {
    ...state,
    value: state.value.toLowerCase()
  }
}
/**
 * 数字7桁を000-0000の形にする
 */
Validator.normalizeZipFormat = function(state) {
  function normalize(str) {
    const m = str.match(/^(\d{3})(\d{4})$/)
    if (m) {
      return m[1] + "-" + m[2];
    } else {
      return str;
    }
  }
  return {
    ...state,
    value: normalize(state.value)
  };
}

/**
 * valueが空だったらエラーにする
 */
Validator.checkRequired = function(state, messageIfEmpty) {
  if (state.valid) {  
    if (state.value !== "") {
      return {
        ...state,
        valid: true,
        message: ""
      };
    } else {
      return {
        ...state,
        valid: false,
        message: messageIfEmpty
      };
    }
  } else {
    // 前のチェックでエラーになってたらそのまま返す
    return state;
  }
};
/**
 * valueがパターンに一致しなかったらエラーにする
 */
Validator.checkMatched = function(state, pattern, messageIfWrong) {
  if (state.value.match(pattern)) {
    return {
      ...state,
      valid: true,
      message: ""
    };
  } else {
    return {
      ...state,
      valid: false,
      message: messageIfWrong
    };
  }
};
/**
 * 名前のバリデーション
 * @param {State} state
 */
Validator.validateName = function(state) {
  const state2 = Validator.modifyToAscii(state);
  return Validator.checkRequired(state2, "名前を入力してください");
};
/**
 * 住所のバリデーション
 */
Validator.validateAddress = function(state) {
  const state2 = Validator.modifyToAscii(state);
  return Validator.checkRequired(state2, "住所を入力してください");
};
/**
 * 郵便番号のバリデーション
 */
Validator.validateZip = function(state) {
  const state2 = Validator.modifyToAscii(state);
  const state3 = Validator.normalizeZipFormat(state2);
  const state4 = Validator.checkRequired(state3, "郵便番号を入力してください");
  return Validator.checkMatched(state4, /^\d{3}-\d{4}$/, "000-0000の形式で入力してください");
};
/**
 * メールアドレスのバリデーション
 */
Validator.validateMail = function(state) {
  const state2 = Validator.modifyToAscii(state);
  const state3 = Validator.modifyToLower(state2);
  const state4 = Validator.checkRequired(state3, "メールアドレスを入力してください");
  return Validator.checkMatched(state4, /^[\w\.]+@[\w\.]+[^\.]$/, "メールアドレスの形式が正しくありません。");
};

// テスト用コード。ブラウザでは実行されない
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Validator;
}
