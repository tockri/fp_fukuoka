"use strict";

/*
 * Stateオブジェクトのインターフェイス
 * {
 *  value: string
 *  valid: boolean
 *  message: string
 * }
 */

/**
 * 名前のバリデーション（純粋関数）
 * @param {State} nameState
 */
function validateName(nameState) {
  if (nameState.value) {
    // もとのオブジェクトを変更せずコピーして新しいオブジェクトを返す。
    // 引数を変更したら純粋関数ではなくなる
    return {
      ...nameState,
      valid: true,
      message: ""
    };
  } else {
    // コピーして新しいオブジェクト
    return {
      ...nameState,
      valid: false,
      message: "名前を入力してください"
    };
  }
}

(function($) {
  $(function() {
    // Materializeのデフォルト挙動をOFFする
    M.validate_field = window.validate_field = function() {};

    /**
     * DOMからStateオブジェクトをつくる
     * @param {jQuery} ipt input要素
     */
    function toState(ipt) {
      return {
        value: ipt.val(),
        valid: true,
        message: ""
      };
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
    // 氏名のinput要素にchangeイベントを設定する
    const ipt = $("#name");
    const helper = $("#name-helper");
    ipt.on("change", function() {
      const state = toState(ipt);
      const newState = validateName(state);
      fromState(newState, ipt, helper);
      checkSubmitable();
    });
    /**
     * 送信していいかチェックしつつ、submit-buttonのdisabledをきりかえる
     * @return よければsubmit-buttonをenableにしつつtrue
     */
    function checkSubmitable() {
      if ($(".validate").filter(".valid").length === $(".validate").length) {
        $("#submit-button").prop("disabled", false);
        return true;
      } else {
        $("#submit-button").prop("disabled", true);
        return false;
      }
    }
  });
})(jQuery);
