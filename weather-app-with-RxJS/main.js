'use strict'

const appContainer = document.getElementById('app-container')
const zipcodeInput = document.getElementById('zipcode-input')
const addLocationBtn = document.getElementById('add-location')

// get stream of button clicks
const btnClickStream = Rx.Observable
  .fromEvent(addLocationBtn, 'click')
  .mapTo(true)

// get stream of zip codes
const zipInputStream = Rx.Observable
  .fromEvent(zipcodeInput, 'input')
  .map(e => e.target.value)
  .filter(zip => zip.length ===  5)

const zipcodeStream = btnClickStream
  .withLatestFrom(zipInputStream, (click, zip) => zip)
  .distinct()
  .forEach(val => console.log('zipcodeStream value', val))
