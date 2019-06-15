"use strict"

/*
 * Stateオブジェクトの決めごと
 * {
 *  value: string
 *  valid: boolean | null
 *  message: string
 * }
 */

/**
 * 名前のバリデーション
 * @param {*} nameState 
 */
function validateName(nameState) {
  if (nameState.value) {
    return {
      ...nameState,
      valid: true,
      message: ""
    }
  } else {
    return {
      ...nameState,
      valid: false,
      message: "名前を入力してください"
    }
  }
}

// テスト用コード。ブラウザでは実行されない
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {
    validateName: validateName
  }
}