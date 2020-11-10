const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c0da6713a1895a740edcb65e19df666e&query=' + latitude + ',' + longitude

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('unable to retrieve api.weatherstack.com')
        } else if (response.body.error) {
            callback(response.body.error.info)
        } else {
            callback(undefined, 'The temperature outside is ' + response.body.current.temperature +
                ' feels like ' + response.body.current.feelslike)
        }
    })
}

module.exports = forecast