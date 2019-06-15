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



(function($) {
  $(function() {
    // Materializeのデフォルト挙動をOFFする
    M.validate_field = window.validate_field = function() {};

    const ipt = $("#name");
    ipt.on("change", function() {
      const state = {
        value: ipt.val(),
        valid: null,
        message: ""
      }
      const newState = validateName(state)
      if (newState.valid === true) {
        ipt.removeClass("invalid");
        ipt.addClass("valid");
      } else if (newState.valid) {
        ipt.removeClass("valid");
        ipt.addClass("invalid");
        helper.attr("data-error", newState.message);
      }
    });
  });
})(jQuery);