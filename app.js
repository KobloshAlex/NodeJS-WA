const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast");

forecast(37.8267, -122.4233, (error, data) => {
    console.log('Data', data)
    console.log('Error', error)
})


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})