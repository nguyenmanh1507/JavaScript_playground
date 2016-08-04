'use strict';

(function ($) {

  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
    return;
  }

  function success(position) {
    var location = document.getElementById('location');
    var weatherIcon = document.getElementById('weatherIcon');
    var temp = document.getElementById('temp');

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var apikey = '0fa240f4b1b66db394ee8e38b24e0555';
    var unit = 'metric';

    var params = '?units=' + unit + '&lat=' + latitude + '&lon=' + longitude + '&APPID=' + apikey;
    var source = 'http://api.openweathermap.org/data/2.5/weather/';

    var url = source + params;

    $.getJSON(url, function (data) {
      var src = getWeatherIcon(data.weather[0].main);
      var tempValue = Math.floor(data.main.temp);

      location.innerHTML = data.name;
      weatherIcon.setAttribute('src', src);
      temp.innerHTML = tempValue;
    }).fail(function () {
      console.log('API Fail');
    });

    console.log('Loading...');
  }

  function error() {
    console.log('Error');
  }

  function getWeatherIcon(weather) {
    weather = weather.toLowerCase();
    var ListIcons = {
      rain: 'images/rain.svg'
    };

    return ListIcons[weather] || 'images/cloud.svg';
  }

  navigator.geolocation.getCurrentPosition(success, error);
})(jQuery);