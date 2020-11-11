console.log('Client side javascript file is loaded!')

// fetch to console



const weatherForm = document.querySelector('form')
const input = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')
weatherForm.addEventListener('submit', event => {
    event.preventDefault()

    const result = input.value;

    fetch('http://localhost:3000/weather?address=' + result).then(response => {
        response.json().then(value => {
            if (value.error) {
                console.log('cannot print data')
            } else {
                msgOne.textContent = value.location
                msgTwo.textContent = value.forecastData
                console.log(value.location)
                console.log(value.forecastData)
            }
        })
    })
})