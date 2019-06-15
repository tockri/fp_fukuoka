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

(function($) {
  $(function() {
    // Materializeのデフォルト挙動をOFFする
    M.validate_field = window.validate_field = function() {};

    const ipt = $("#name");
    const helper = $("#name-helper");
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
      } else {
        ipt.removeClass("valid");
        ipt.addClass("invalid");
        helper.attr("data-error", newState.message);
      }
      checkSubmitable();
    });
  });
})(jQuery);