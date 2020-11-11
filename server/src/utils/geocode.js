const request = require("request");


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoib2xla3NhbmRya29ibG9zaCIsImEiOiJja2hjYXUxM2IwNW9nMnFwZjBoanhnbmN2In0.a35O4wR4ebA4gHgHj0x6qA&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to retrieve api.weatherstack.com')

        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;