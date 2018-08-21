// import "../css/blocks/faq-index-form.scss";

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
            window.addEventListener("DOMMouseScroll", preventDefault, false);
        window.onwheel = preventDefault;
        window.onmousewheel = document.onmousewheel = preventDefault;
        window.ontouchmove = preventDefault;
        document.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener("DOMMouseScroll", preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    let historyElement = $("#askFaqIndexFormHistory");
    historyElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose your credit",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    historyElement.on("select2:opening", function () {
        disableScroll();
    });
    historyElement.on("select2:closing", function () {
        enableScroll();
    });

    let accountElement = $("#askFaqIndexFormAccount");
    accountElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    accountElement.on("select2:opening", function () {
        disableScroll();
    });
    accountElement.on("select2:closing", function () {
        enableScroll();
    });

    let howlongElement = $("#askFaqIndexFormHowlong");
    howlongElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    howlongElement.on("select2:opening", function () {
        disableScroll();
    });
    howlongElement.on("select2:closing", function () {
        enableScroll();
    });

    let bankruptElement = $("#askFaqIndexFormBankrupt");
    bankruptElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    bankruptElement.on("select2:opening", function () {
        disableScroll();
    });
    bankruptElement.on("select2:closing", function () {
        enableScroll();
    });

    let beenlateElement = $("#askFaqIndexFormBeenlate");
    beenlateElement.select2({
        minimumResultsForSearch: -1,
        placeholder: "Choose an option",
        containerCssClass: "select2-faq-index-form",
        dropdownCssClass: "select2-faq-index-form"
    });
    beenlateElement.on("select2:opening", function () {
        disableScroll();
    });
    beenlateElement.on("select2:closing", function () {
        enableScroll();
    });


    $(".faq-index-form__addblock-agree").on("click", function () {
        if ($("#askFaqIndexFormAgree").val() === "0") {
            $(".faq-index-form__addblock-agree-cb-ckd").show();
            $("#askFaqIndexFormAgree").val("1");
            setValid($(".faq-index-form__addblock-agree-cb"), $(".faq-index-form__addblock-agree-right"), "");
        }
        else {
            $(".faq-index-form__addblock-agree-cb-ckd").hide();
            $("#askFaqIndexFormAgree").val("0");
            setInvalid($(".faq-index-form__addblock-agree-cb"), $(".faq-index-form__addblock-agree-right"), "");
        }
    });

    $(".faq-index-form__addblock-agree-cb").keyup(function(){
        if(event.keyCode==13)
        {
            $(".faq-index-form__addblock-agree").click();
            return false;
        }
    })

    $("#askFaqIndexSubmit").keyup(function(){
        if(event.keyCode==13)
        {
            $(this).click();
            return false;
        }
    })

}


function displaySelects() {
    $(".faq-index-form__selects").css("display", "block");
}

function checkEmail(valEmail) {
    let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    console.log("Емайл проверяется:");
    if (pattern.test(valEmail)) {
        console.log("Емайл правильный!");
        checkEmail = true
    } else {
        checkEmail = false
        console.log("Емайл неправильный!");
    }
}

function setInvalid(elBox, elLabel, textLabel) {
    elBox.addClass("invalid-box");
    elLabel.addClass("invalid-text");
    if (textLabel != "") {
        elLabel.html(textLabel);
    }
}

function setValid(elBox, elLabel, textLabel) {
    elBox.removeClass("invalid-box");
    elLabel.removeClass("invalid-text");
    if (textLabel != "") {
        elLabel.html(textLabel);
    }
}

function submitForm() {
    function checkValidity() {
        checkValidity = true;

        // if (!checkEmail(email)) {
        // почему функция не вызывается повторно???

        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(!pattern.test(email)) {
            setInvalid($("#askFaqIndexFormEmail"), $(".faq-index-form__email-label"), "Please, enter valid e-mail");
            checkValidity = false
        } else {
            setValid($("#askFaqIndexFormEmail"), $(".faq-index-form__email-label"), "Enter your Email:<span class='faq-index-form__asterisk'>*</span>");
        }

        if (question.trim() === "") {
            setInvalid($("#askFaqIndexFormQuestion"), $(".faq-index-form__question-label"), "Please, enter your question:*");
            checkValidity = false;
        } else {
            setValid($("#askFaqIndexFormQuestion"), $(".faq-index-form__question-label"), "Ask your question:<span class='faq-index-form__asterisk'>*</span>");
        }

        if (captcha.trim() === "") {
            setInvalid($("#askFaqIndexFormCaptcha"), $(".faq-index-form__captcha-label"), "");
            checkValidity = false;
        } else {
            if (captcha != "1234") {
                setInvalid($("#askFaqIndexFormCaptcha"), $(".faq-index-form__captcha-label"), "");
                $(".faq-index-form__captcha-label").addClass("wrong-captcha");
                checkValidity = false;
            } else {
                setValid($("#askFaqIndexFormCaptcha"), $(".faq-index-form__captcha-label"), "");
                $(".faq-index-form__captcha-label").removeClass("wrong-captcha");
            }
        }
        if (agree === "0") {
            setInvalid($(".faq-index-form__addblock-agree-cb"), $(".faq-index-form__addblock-agree-right"), "");
            checkValidity = false;
        } else {
            setValid($(".faq-index-form__addblock-agree-cb"), $(".faq-index-form__addblock-agree-right"), "");
        }

        if (!checkValidity) {
            $(".faq-index-form").addClass("unfilled-form");
        } else {
            $(".faq-index-form").removeClass("unfilled-form");
        }

        console.log(checkValidity);
        return checkValidity;
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
        console.log("посылаем данные");
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
            type: "POST",
            // url: "/contact-us.php?334227act=contactform",
            url: "http://localhost:8080/",
            data: params,
            dataType: "json",
        });
    }

}

$(document).ready(() => {
    setFormState();

    $("#askFaqIndexFormEmail").blur(function () {
        // if (!checkEmail($(this).val())) {
        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(!pattern.test($(this).val())){
            console.log("зашли внутрь чекЕмайл, невалидно " );
            setInvalid($(this),$(".faq-index-form__email-label"),"Please, enter valid e-mail");
        } else {
            console.log("зашли внутрь чекЕмайл, валидно");
            setValid($(this),$(".faq-index-form__email-label"),"Enter your Email:<span class='faq-index-form__asterisk'>*</span>");
        }
    });

    $("#askFaqIndexFormQuestion").blur(function () {
        if ($(this).val().trim() === "") {
            setInvalid($(this),$(".faq-index-form__question-label"),"Please, enter your question:*");
        } else {
            setValid($(this), $(".faq-index-form__question-label"), "Ask your question:<span class='faq-index-form__asterisk'>*</span>");
        }
    });

    $("#askFaqIndexFormCaptcha").blur(function () {
        if ($(this).val() != "1234") {
            setInvalid($("#askFaqIndexFormCaptcha"), $(".faq-index-form__captcha-label"), "");
            $(".faq-index-form__captcha-label").addClass("wrong-captcha");
        } else {
            setValid($("#askFaqIndexFormCaptcha"), $(".faq-index-form__captcha-label"), "");
            $(".faq-index-form__captcha-label").removeClass("wrong-captcha");
        }
    });


    $("#askFaqIndexSubmit").on("click", function () {
        if ($(".faq-index-form__selects").css("display") == "none") {
            displaySelects();
        } else
            submitForm();
    });

    $("#askFaqIndexFormReloadCaptcha").on("click", function () {
        console.log("Обновить капчу!");
    });

});



