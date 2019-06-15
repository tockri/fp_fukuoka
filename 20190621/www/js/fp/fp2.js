"use strict"

/*
 * Stateオブジェクトのインターフェイス
 * {
 *  value: string
 *  valid: boolean
 *  message: string
 * }
 */

// exportしやすいように1つのオブジェクトにまとめちゃう
const Validator = {}
/**
 * 名前のバリデーション
 * @param {State} state 
 */
Validator.validateName = function(state) {
  if (state.value) {
    return {
      ...state,
      valid: true,
      message: ""
    }
  } else {
    return {
      ...state,
      valid: false,
      message: "名前を入力してください"
    }
  }
}
Validator.validateAddress = function(state) {
  return state;
}
Validator.validateZip = function(state) {
  return state;
}
Validator.validateMail = function(state) {
  return state;
}


// テスト用コード。ブラウザでは実行されない
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Validator;
}