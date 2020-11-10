const request = require("request");


const geocode = (address, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoib2xla3NhbmRya29ibG9zaCIsImEiOiJja2hjYXUxM2IwNW9nMnFwZjBoanhnbmN2In0.a35O4wR4ebA4gHgHj0x6qA&limit=1'

    request({url: geoUrl, json: true}, (error, response) => {
        if (error) {
            callback('unable to retrieve api.weatherstack.com')
        } else if (response.body.features.length === 0) {
            callback('no location matches')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;