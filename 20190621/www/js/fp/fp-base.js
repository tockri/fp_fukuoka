(function($) {
  /**
   * 送信していいかチェックしつつ、submit-buttonのdisabledをきりかえる
   * @return よければsubmit-buttonをenableにしつつtrue
   */
  function checkSubmitable() {
    if ($(".validate").filter(".valid").length === $(".validate").length) {
      $("#submit-button").prop("disabled", false);
      return true
    } else {
      $("#submit-button").prop("disabled", true);
      return false
    }
  }
  /**
   * DOMからStateオブジェクトをつくる
   * @param {jQuery} ipt input要素
   */
  function toState(ipt) {
    return {
      value: ipt.val(),
      valid: true,
      message: ""
    }
  }
  /**
   * StateオブジェクトからDOMに書き戻す
   * @param {State} state Stateオブジェクト
   * @param {jQuery} ipt input要素
   * @param {jQuery} helper helper要素
   */
  function fromState(state, ipt, helper) {
    if (state.valid === true) {
      ipt.removeClass("invalid");
      ipt.addClass("valid");
    } else if (state.valid === false) {
      ipt.removeClass("valid");
      ipt.addClass("invalid");
      helper.attr("data-error", state.message);
    }
  }
  $(function() {
    // Materializeのデフォルト挙動をOFFする
    M.validate_field = window.validate_field = function() {};
    /**
     * changeイベントの挙動を登録する
     * @param {jQuery} ipt input要素
     * @param {jQuery} helper helper要素
     * @param {Function} validator validationメソッド
     */
    function setValidation(ipt, helper, validator) {
      ipt.on("change", function() {
        const state = toState(ipt);
        const newState = validator(state)
        fromState(newState, ipt, helper);
        checkSubmitable();
      });
    }
    setValidation($("#name"), $("#name-helper"), Validator.validateName);
    setValidation($("#zip"), $("#zip-helper"), Validator.validateZip);
    setValidation($("#address"), $("#address-helper"), Validator.validateAddress);
    setValidation($("#mail"), $("#mail-helper"), Validator.validateMail);
  });
})(jQuery);