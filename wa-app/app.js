const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast");

let input = process.argv[2];

if (!input) {
    console.log('provide location')
} else {
    geocode(input, (geocodeError, {latitude, location, longitude}) => {
        if (geocodeError) {
            return console.log(geocodeError)
        }
        forecast(latitude, longitude, (forecastError, forecastData) => {
            if (forecastError) {
                return console.log(forecastError)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}

