// import '../css/blocks/faq-index-form.scss';

function setFormState() {

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

    let historyElement = $('#askFaqIndexFormHistory');
    historyElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose your credit",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    historyElement.on('select2:opening', function () {
        disableScroll();
    });
    historyElement.on('select2:closing', function () {
        enableScroll();
    });

    let accountElement = $('#askFaqIndexFormAccount');
    accountElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    accountElement.on('select2:opening', function () {
        disableScroll();
    });
    accountElement.on('select2:closing', function () {
        enableScroll();
    });

    let howlongElement = $('#askFaqIndexFormHowlong');
    howlongElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    howlongElement.on('select2:opening', function () {
        disableScroll();
    });
    howlongElement.on('select2:closing', function () {
        enableScroll();
    });

    let bankruptElement = $('#askFaqIndexFormBankrupt');
    bankruptElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    bankruptElement.on('select2:opening', function () {
        disableScroll();
    });
    bankruptElement.on('select2:closing', function () {
        enableScroll();
    });

    let beenlateElement = $('#askFaqIndexFormBeenlate');
    beenlateElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    beenlateElement.on('select2:opening', function () {
        disableScroll();
    });
    beenlateElement.on('select2:closing', function () {
        enableScroll();
    });


    $('.faq-index-form__addblock-agree').on('click', function () {
        if ($('#askFaqIndexFormAgree').val() === '0') {
            $('.faq-index-form__addblock-agree-cb-ckd').show();
            $('#askFaqIndexFormAgree').val('1');
        }
        else {
            $('.faq-index-form__addblock-agree-cb-ckd').hide();
            $('#askFaqIndexFormAgree').val('0');
        }
    });

}

$(document).ready(() => {
    setFormState();
});


function displaySelects() {
    $('.faq-index-form__selects').css('display','block');
}

function  submitForm() {

    function checkValidity() {
        checkValidity = true;
        if ((email === '')||(question === '')||(captcha === '')||(agree === '0')) {
            $('.faq-index-form').addClass('unfilled-form');
            checkValidity = false;
        } else {
            $('.faq-index-form').removeClass('unfilled-form');
        }

        if (email === '' ) {
            $('.faq-index-form__email').addClass('invalid-box');
            $('.faq-index-form__email-label').addClass('invalid-text');
            $('.faq-index-form__email-label').html('Please, enter valid e-mail');
            checkValidity = false;
        } else {
            $('.faq-index-form__email').removeClass('invalid-box');
            $('.faq-index-form__email-label').removeClass('invalid-text');
            $('.faq-index-form__email-label').html('Enter your Email:<span class="faq-index-form__asterisk">*</span>');
        }

        if (question === '' ) {
            $('.faq-index-form__question').addClass('invalid-box');
            $('.faq-index-form__question-label').addClass('invalid-text');
            $('.faq-index-form__question-label').html('Please, enter your question:*');
            checkValidity = false;
        } else {
            $('.faq-index-form__question').removeClass('invalid-box');
            $('.faq-index-form__question-label').removeClass('invalid-text');
            $('.faq-index-form__question-label').html('Ask your question:<span class="faq-index-form__asterisk">*</span>');
        }

        if (captcha === '' ) {
            $('.faq-index-form__captcha').addClass('invalid-box');
            $('.faq-index-form__captcha-label').addClass('invalid-text');
            checkValidity = false;
        } else {
            $('.faq-index-form__captcha').removeClass('invalid-box');
            $('.faq-index-form__captcha-label').removeClass('invalid-text');
        }

        if (captcha !== '1234' ) {
            $('.faq-index-form__captcha-label').addClass('wrong-captcha');
            checkValidity = false;
        } else {
            $('.faq-index-form__captcha-label').removeClass('wrong-captcha');
        }

        if (agree === '0' ) {
            $('.faq-index-form__addblock-agree-cb').addClass('invalid-box');
            $('.faq-index-form__addblock-agree-right').addClass('invalid-text');
            checkValidity = false;
        } else {
            $('.faq-index-form__addblock-agree-cb').removeClass('invalid-box');
            $('.faq-index-form__addblock-agree-right').removeClass('invalid-text');
        }

    }

    let name = $("#askFaqIndexFormName").val();
    let email = $("#askFaqIndexFormEmail").val();
    let question = $("#askFaqIndexFormQuestion").val();
    let history = $("#askFaqIndexFormHistory").val();
    let account = $("#askFaqIndexFormAccount").val();
    let howlong = $("#askFaqIndexFormHowlong").val();
    let bankrupt = $("#askFaqIndexFormBankrupt").val();
    let beenlate = $("#askFaqIndexFormBeenlate").val();
    let captcha = $("#askFaqIndexFormCaptcha").val();
    let agree = $("#askFaqIndexFormAgree").val();

    if (checkValidity()) {
        let params = {};
        params.name = name;
        params.email = email;
        params.question = question;
        params.history = history;
        params.account = account;
        params.howlong = howlong;
        params.bankrupt = bankrupt;
        params.beenlate = beenlate;

        $.ajax({
            type: 'POST',
            url: '/contact-us.php?334227act=contactform',
            data: params,
            dataType: 'json',
        });
    }

}


$('#askFaqIndexSubmit').on('click', function () {
    if ($('.faq-index-form__selects').css('display') == 'none') {
        displaySelects();
    } else
    submitForm();
});
