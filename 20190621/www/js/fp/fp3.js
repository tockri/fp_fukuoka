"use strict";

/*
 * Stateオブジェクトのインターフェイス
 * {
 *  value: string
 *  valid: boolean | null
 *  message: string
 * }
 */

// exportしやすいように1つのオブジェクトにまとめちゃう
const Validator = {};
/**
 * valueが空だったらエラーにする
 */
Validator.required = function(state, messageIfEmpty) {
  if (state.valid) {  
    if (state.value) {
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
Validator.match = function(state, pattern, messageIfWrong) {
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
};
/**
 * 名前のバリデーション
 * @param {State} state
 */
Validator.validateName = function(state) {
  return Validator.required(state, "名前を入力してください");
};
/**
 * 住所のバリデーション
 */
Validator.validateAddress = function(state) {
  return Validator.required(state, "住所を入力してください");
};
/**
 * 郵便番号のバリデーション
 */
Validator.validateZip = function(state) {
  const state2 = Validator.required(state, "郵便番号を入力してください");
  return Validator.match(state2, /^\d{3}-\d{4}$/, "000-0000の形式で入力してください");
};
/**
 * メールアドレスのバリデーション
 */
Validator.validateMail = function(state) {
  const state2 = Validator.required(state, "メールアドレスを入力してください");
  return Validator.match(state2, /^[\w\.]+@[\w\.]+[^\.]$/, "メールアドレスの形式が正しくありません。");
};

// テスト用コード。ブラウザでは実行されない
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Validator;
}
