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

    let historyElement = $('#faq-index-form__history');
    console.log('testHistory');
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

    let accountElement = $('#faq-index-form__account');
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

    let howlongElement = $('#faq-index-form__howlong');
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

    let bankruptElement = $('#faq-index-form__bankrupt');
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

    let beenlateElement = $('#faq-index-form__beenlate');
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


}

$(document).ready(() => {
    setFormState();
});

