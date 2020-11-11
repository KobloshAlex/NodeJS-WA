const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c0da6713a1895a740edcb65e19df666e&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to retrieve api.weatherstack.com')
        } else if (body.error) {
            callback(body.error.info)
        } else {
            callback(undefined, 'The temperature outside is ' + body.current.temperature +
                ' feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast