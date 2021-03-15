fadeIn = function (element, px) {
    $(document).ready(() => {
        $(element).css("opacity", px)
        $(element).animate({
            opacity: "1"
        }, 1000);
    })
}
slideDown = function (element, px) {
    $(document).ready(() => {
        $(element).css("margin-top", px)
        $(element).animate({
            "margin-top": "0"
        }, 1000);
    })
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(element).css("margin-top", px)
        $(element).animate({
            "margin-top": "0"
        }, 1000);
    }
}
slideRight = function (element, px) {
    $(document).ready(() => {
        $(element).css("margin-right", px)
        $(element).animate({
            "margin-right": "0"
        }, 1000);
    })
}
slideLeft = function (element, px) {
    $(document).ready(() => {
        $(element).css("margin-left", px)
        $(element).animate({
            "margin-left": "0"
        }, 1000);
    })
}