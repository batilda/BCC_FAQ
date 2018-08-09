import './styles.scss';
import '../../../../lib/components/select2/src/scss/core.scss';
import $ from 'jquery';
import Statistic from 'statistic';
import popup from 'popup_v2';
import 'jquery.select2';

function setFormState() {
    $('#ask-popup-name').val($('#ask-name').val());
    $('#ask-popup-email').val($('#ask-email').val());
    $('#ask-popup-question').val($('#ask-question').val());

    $('#ask-name').val('');
    $('#ask-email').val('');
    $('#ask-question').val('');

    let keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener)
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault;
        window.onmousewheel = document.onmousewheel = preventDefault;
        window.ontouchmove  = preventDefault;
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    let historyElement = $('#ask-popup-history');
    historyElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose your credit",
        containerCssClass: "select2-ask-popup",
        dropdownCssClass: "select2-ask-popup"
    });
    historyElement.on('select2:opening', function () {
        disableScroll();
    });
    historyElement.on('select2:closing', function () {
        enableScroll();
    });

    let accountElement = $('#ask-popup-account');
    accountElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-ask-popup",
        dropdownCssClass: "select2-ask-popup"
    });
    accountElement.on('select2:opening', function () {
        disableScroll();
    });
    accountElement.on('select2:closing', function () {
        enableScroll();
    });

    let howlongElement = $('#ask-popup-howlong');
    howlongElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-ask-popup",
        dropdownCssClass: "select2-ask-popup"
    });
    howlongElement.on('select2:opening', function () {
        disableScroll();
    });
    howlongElement.on('select2:closing', function () {
        enableScroll();
    });

    let bankruptElement = $('#ask-popup-bankrupt');
    bankruptElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-ask-popup",
        dropdownCssClass: "select2-ask-popup"
    });
    bankruptElement.on('select2:opening', function () {
        disableScroll();
    });
    bankruptElement.on('select2:closing', function () {
        enableScroll();
    });

    let beenlateElement = $('#ask-popup-beenlate');
    beenlateElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-ask-popup",
        dropdownCssClass: "select2-ask-popup"
    });
    beenlateElement.on('select2:opening', function () {
        disableScroll();
    });
    beenlateElement.on('select2:closing', function () {
        enableScroll();
    });

    $('.ask-a-question-popup-addblock-agree').on('click', function () {
        if ($('#ask-popup-agree').val() === '0') {
            $('.ask-a-question-popup-addblock-agree-cb-ckd').show();
            $('#ask-popup-agree').val('1');
        }
        else {
            $('.ask-a-question-popup-addblock-agree-cb-ckd').hide();
            $('#ask-popup-agree').val('0');
        }
    });

    if($("#askPopupRecaptcha").length){
        window.widgetAskPopup = grecaptcha.render("askPopupRecaptcha", {
            "sitekey" : "6LdGuTcUAAAAAGrObH049lgAxbmv-HgC1BFsvz1z",
            "callback" : "VerifyAndSubmitAskPopup"
        });
    }
}

$(document).ready(() => {
    popup.addCallBack('afterOpen', 'ask-a-question', setFormState);

    Statistic.updateScreenResolution();
});

$(window).resize(function() {
    $.fancybox.update();
});