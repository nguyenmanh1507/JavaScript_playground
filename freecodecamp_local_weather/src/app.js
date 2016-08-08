(function($) {

  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser')
    return
  }

  function success(position) {
    const location    = document.getElementById('location')
    const weatherIcon = document.getElementById('weatherIcon')
    const description = document.getElementById('description')
    const temp        = document.getElementById('temp')

    const latitude    = position.coords.latitude
    const longitude   = position.coords.longitude

    const apikey      = '0fa240f4b1b66db394ee8e38b24e0555'
    const unit        = 'metric'

    const params      = `?units=${unit}&lat=${latitude}&lon=${longitude}&APPID=${apikey}`
    const source      = 'http://api.openweathermap.org/data/2.5/weather/'

    const url         = source + params

    $.getJSON(url, function(data){
      console.log(data)
      const src         = getWeatherIcon(data.weather[0].main)
      const tempValue   = Math.floor(data.main.temp)
      const switchInput = document.getElementById('switchInput')

      location.innerHTML    = data.name
      temp.innerHTML        = `${tempValue} &#8451;`
      description.innerHTML = data.weather[0].description
      weatherIcon.setAttribute('src', src)

      switchInput.addEventListener('change', function() {
        temp.innerHTML = (switchInput.checked)
          ? `${celsiusToFahrenheit(tempValue)} &#8457;`
          : `${tempValue} &#8451;`
      })
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
      rain: 'images/rain.svg',
      clear: 'images/sunny.svg',
      cloud: 'images/cloud.svg'
    }

    return ListIcons[weather] || 'images/cloud.svg'
  }

  function celsiusToFahrenheit(cDegree) {
    return cDegree * 1.8 + 32
  }

  navigator.geolocation.getCurrentPosition(success, error)

}(jQuery))
