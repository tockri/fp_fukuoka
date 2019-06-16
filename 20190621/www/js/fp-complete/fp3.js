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
 * valueが空だったらエラーにする
 */
Validator.checkRequired = function(state, messageIfEmpty) {
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
};
/**
 * valueがパターンに一致しなかったらエラーにする
 */
Validator.checkMatched = function(state, pattern, messageIfWrong) {
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
  return Validator.checkRequired(state, "名前を入力してください");
};
/**
 * 住所のバリデーション
 */
Validator.validateAddress = function(state) {
  return Validator.checkRequired(state, "住所を入力してください");
};
/**
 * 郵便番号のバリデーション
 */
Validator.validateZip = function(state) {
  const state2 = Validator.checkRequired(state, "郵便番号を入力してください");
  return Validator.checkMatched(state2, /^\d{3}-\d{4}$/, "000-0000の形式で入力してください");
};
/**
 * メールアドレスのバリデーション
 */
Validator.validateMail = function(state) {
  const state2 = Validator.checkRequired(state, "メールアドレスを入力してください");
  return Validator.checkMatched(state2, /^[\w\.]+@[\w\.]+[^\.]$/, "メールアドレスの形式が正しくありません。");
};

// テスト用コード。ブラウザでは実行されない
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Validator;
}
