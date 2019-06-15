"use strict"

/**
 * Materializeの仕様でvalidマークする
 * @param {jQuery} ipt input要素
 */
function makeValid(ipt) {
  ipt.removeClass("invalid");
  ipt.addClass("valid");
}
/**
 * Materializeの仕様でinvalidマークする
 * @param {jQuery} ipt input要素
 */
function makeInvalid(ipt) {
  ipt.removeClass("valid");
  ipt.addClass("invalid");
}
/**
 * Materializeの仕様でエラーメッセージを設定する
 */
function setErrorMessage(helper, message) {
  helper.attr("data-error", message);
}

/**
 * バリデーションを設定する
 * @param {string} id inputのid
 * @param {string} helperId helperのid
 * @param {string} validationType "require" | "regex"
 * @param {regexp} pattern validationType == "regex"のときの判定正規表現
 * @param {object} errorMessages {empty: 未入力の場合, wrong: patterに一致しない場合}
 */
function setValidation(id, helperId, validationType, pattern, errorMessages) {
  const ipt = $("#" + id);
  const helper = $("#" + helperId);
  ipt.on("change", function() {
    const value = ipt.val();
    if (value) {
      if (validationType === "require") {
        makeValid(ipt);
      } else if (validationType === "regex" && value.match(pattern)) {
        makeValid(ipt);
      } else {
        makeInvalid(ipt);
        setErrorMessage(helper, errorMessages.wrong);
      }
    } else {
      makeInvalid(ipt);
      setErrorMessage(helper, errorMessages.empty);
    }
    checkSubmitable();
  })
}
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
    setValidation("name", "name-helper", "require", null, {empty:"名前を入力してください"});
    setValidation("address", "address-helper", "require", null, {empty:"住所を入力してください"});
    setValidation("zip", "zip-helper", "regex", /^\d{3}-\d{4}$/, {
      empty: "郵便番号を入力してください",
      wrong: "000-0000の形式で入力してください"
    });
    setValidation("mail", "mail-helper", "regex", /^[\w\.]+@[\w\.]+[^\.]$/, {
      empty: "メールアドレスを入力してください",
      wrong: "メールアドレスの形式が正しくありません。"
    });
  });
})(jQuery);
