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
 * 名前のバリデーション
 */
function validateName() {
  const ipt = $("#name");
  const helper = $("#name-helper");
  if (ipt.val() !== "") {
    makeValid(ipt);
  } else {
    makeInvalid(ipt);
    setErrorMessage(helper, "氏名を入力してください");
  }
  // submit-buttonのチェックもする
  checkSubmitable();
}
/**
 * 住所のバリデーション
 */
function validateAddress() {
  const ipt = $("#address");
  const helper = $("#address-helper");
  if (ipt.val() !== "") {
    makeValid(ipt);
  } else {
    makeInvalid(ipt);
    setErrorMessage(helper, "住所を入力してください");
  }
  // submit-buttonのチェックもする
  checkSubmitable();
}
/**
 * 郵便番号のバリデーション
 */
function validateZip() {
  const ipt = $("#zip");
  const helper = $("#zip-helper");
  const zip = ipt.val();
  if (zip !== "") {
    if (zip.match(/^\d{3}-\d{4}$/)) {
      makeValid(ipt);
    } else {
      makeInvalid(ipt);
      setErrorMessage(helper, "000-0000の形式で入力してください");
    }
  } else {
    makeInvalid(ipt);
    setErrorMessage(helper, "郵便番号を入力してください");
  }
  // submit-buttonのチェックもする
  checkSubmitable();
}
/**
 * メールアドレスのバリデーション
 */
function validateMail() {
  const ipt = $("#mail");
  const helper = $("#mail-helper");
  const mail = ipt.val();
  if (mail !== "") {
    if (mail.match(/^[\w\.]+@[\w\.]+[^\.]$/)) {
      makeValid(ipt);
    } else {
      makeInvalid(ipt);
      setErrorMessage(helper, "メールアドレスの形式が正しくありません。");
    }
  } else {
    makeInvalid(ipt);
    setErrorMessage(helper, "メールアドレスを入力してください");
  }
  // submit-buttonのチェックもする
  checkSubmitable();
}
/**
 * 送信していいかチェックしつつ、submit-buttonのdisabledをきりかえる
 * @return よければtrue
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
    $("#name").on("change", validateName);
    $("#address").on("change", validateAddress);
    $("#zip").on("change", validateZip);
    $("#mail").on("change", validateMail);
  });
})(jQuery);
