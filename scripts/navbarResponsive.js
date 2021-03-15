$(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww <= 991) {
            $('.navbar-collapse').addClass('fixed-top');
            $('.myUl').hide();
        } else if (ww > 991) {
            $('.navbar-collapse').removeClass('fixed-top');
            $('.myUl').show();
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});
// AOS.init();