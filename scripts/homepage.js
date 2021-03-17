//----------------------Sponsers-----------------------------
(function sponserPopup() {
    const popup = $('.popupWrapper');
    const closeIt = $('.popupClose');
    const btn = $('.sponser');
    for (let i = 0; i < popup.length; i++) {
        $(popup[i]).hide()
        $(btn[i]).click(() => {
            $(popup[i]).show();
        })

        $(closeIt).click(() => {
            $(popup[i]).hide();
        })
        $(popup[i]).click((e) => {
            $(popup[i]).hide();
        })
    }
})();
//Focus on sponserOne box
(function pressSponser() {
    const sponsers = $('.sponser');
    $(document).mousemove(function () {
        if ($('.sponser:hover').length == 0) {
            $('.sponserOne').addClass("activateSponser");

        } else {
            sponsers.each(function (i) {
                if ($('.sponser:hover').length != 0) {
                    $('.sponserOne').removeClass("activateSponser");
                }
            })
        }
    })
})();
//Sponsers Redirect Buttons
(function redirect() {
    $('.sponser-btn').click(function () {
        var go_to_url = $(this).val();
        window.open(go_to_url, '_blank');
    })
})();
//trivia open
(function triviaOpen() {
    $('.trivia-btn').click(function () {
        window.open("trivia.html", "Trivia", "height = 500,width = 700")
    })
})();
//------------------------------------------------
function makeTimer() {
    var endTime = new Date("March 1, 2022 17:00:00 PDT");
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}
setInterval(function () {
    makeTimer();
}, 0);
//------------------Wheater------------------------
function get(url) {
    return new Promise(function (resolve, reject) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url);
        httpRequest.onload = function () {
            if (httpRequest.status === 200) {
                // Resolve the promise with the response text
                // success(httpRequest.responseText);
                resolve(httpRequest.response);
            } else {
                // Reject the promise with the status text
                // fail(httpRequest.status);
                reject(Error(httpRequest.statusText));
            }
        };

        // Handle network errors
        httpRequest.onerror = function () {
            reject(Error('Network Error'));
        };

        httpRequest.send();
    });
}

function successHandler(data) {
    const dataObj = JSON.parse(data);

    const div = `
        <h1>Weather</h1>
        <h2>
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="50"
            height="50"
        />${dataObj.name}
        </h2>
        <p>
          <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | 
          ${dataObj.weather[0].description}
        </p>`;
    console.log('Weather Working')
    return div;
}

function failHandler(status) {
    console.log('fail status: ' + status);
}

function tempToF(kelvin) {
    return (kelvin - 273.15).toFixed(0);
}

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '2e43e4e3717dc5d1d216c1694d200185';
    //const apiKey = '';
    const weatherDiv = document.querySelector('.weather');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=new+orleans&APPID=${apiKey}`;



    get(url)
        .then((resolve) => {
            weatherDiv.innerHTML = successHandler(resolve);
        })
        .catch((reject) => failHandler(reject))
});