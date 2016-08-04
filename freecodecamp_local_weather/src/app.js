(function($) {

  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser')
    return
  }

  function success(position) {
    const location    = document.getElementById('location')
    const weatherIcon = document.getElementById('weatherIcon')
    const temp        = document.getElementById('temp')

    const latitude    = position.coords.latitude
    const longitude   = position.coords.longitude

    const apikey      = '0fa240f4b1b66db394ee8e38b24e0555'
    const unit        = 'metric'

    const params      = `?units=${unit}&lat=${latitude}&lon=${longitude}&APPID=${apikey}`
    const source      = 'http://api.openweathermap.org/data/2.5/weather/'

    const url         = source + params

    $.getJSON(url, function(data){
      const src          = getWeatherIcon(data.weather[0].main)
      const tempValue    = Math.floor(data.main.temp)

      location.innerHTML = data.name
      weatherIcon.setAttribute('src', src)
      temp.innerHTML     = tempValue
    }).fail(function() {
      console.log('API Fail')
    })

    console.log('Loading...')
  }

  function error() {
    console.log('Error')
  }

  function getWeatherIcon(weather) {
    weather = weather.toLowerCase()
    const ListIcons = {
      rain: 'images/rain.svg'
    }

    return ListIcons[weather] || 'images/cloud.svg'
  }

  navigator.geolocation.getCurrentPosition(success, error)

}(jQuery))
