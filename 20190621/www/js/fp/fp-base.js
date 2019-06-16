(function($) {
  /**
   * DOMからStateオブジェクトをつくる
   * @param {jQuery} ipt input要素
   * @returns {State}
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
     * @param {Function} validationFunc validation関数
     */
    function setValidation(ipt, helper, validationFunc) {
      ipt.on("change", function() {
        const state = toState(ipt);
        const newState = validationFunc(state)
        fromState(newState, ipt, helper);
        checkSubmitable();
      });
    }
    // 名前
    setValidation($("#name"), $("#name-helper"), Validator.validateName);
    // 郵便番号
    setValidation($("#zip"), $("#zip-helper"), Validator.validateZip);
    // 住所
    setValidation($("#address"), $("#address-helper"), Validator.validateAddress);
    // メールアドレス
    setValidation($("#mail"), $("#mail-helper"), Validator.validateMail);







    /**
     * submit-buttonのdisabledをきりかえる
     * （今回はとりあえず無視で）
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
  });
})(jQuery);