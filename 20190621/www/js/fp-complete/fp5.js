"use strict";

/*
 * Stateオブジェクトのインターフェイス
 * {
 *  value: string
 *  valid: boolean
 *  message: string
 * }
 */

// 関数プログラミングの道具
const FP = {
  /**
   * 複数の関数を合成した関数を返す
   * ・引数1つ、返り値1つ
   * ・引数と返り値の型が同じ
   */
  pipe: function() {
    const funcs = arguments;
    return function(s) {
      let r = s;
      for (let i = 0; i < funcs.length; i++) {
        r = funcs[i](r);
      }
      return r;
    }
  }
}

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
 * valueが空だったらエラーにする関数を返す
 * （pipeで合成できるようにカリー化）
 */
Validator.checkRequired = function(messageIfEmpty) {
  return function(state) {
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
  }
};
/**
 * valueがパターンに一致しなかったらエラーにする関数を返す
 * （pipeで合成できるようにカリー化）
 */
Validator.checkMatched = function(pattern, messageIfWrong) {
  return function(state) {
    if (state.valid) {
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
    } else {
      // 前のチェックでエラーになってたらそのまま返す
      return state;
    }
  }
};
/**
 * 名前のバリデーション
 * @param {State} state
 */
Validator.validateName = FP.pipe(
  Validator.modifyToAscii,
  Validator.checkRequired("名前を入力してください")
);
/**
 * 住所のバリデーション
 * @param {State} state
 */
Validator.validateAddress = FP.pipe(
  Validator.modifyToAscii,
  Validator.checkRequired("住所を入力してください")
);
/**
 * 郵便番号のバリデーション
 * @param {State} state
 */
Validator.validateZip = FP.pipe(
  Validator.modifyToAscii,
  Validator.normalizeZipFormat,
  Validator.checkRequired("郵便番号を入力してください"),
  Validator.checkMatched(/^\d{3}-\d{4}$/, "000-0000の形式で入力してください")
);
/**
 * メールアドレスのバリデーション
 * @param {State} state
 */
Validator.validateMail = FP.pipe(
  Validator.modifyToAscii,
  Validator.modifyToLower,
  Validator.checkRequired("メールアドレスを入力してください"),
  Validator.checkMatched(/^[\w\.]+@[\w\.]+[^\.]$/, "メールアドレスの形式が正しくありません。")
);

// テスト用コード。ブラウザでは実行されない
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Validator;
}
