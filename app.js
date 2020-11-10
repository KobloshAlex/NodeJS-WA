const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c0da6713a1895a740edcb65e19df666e&query=37.8267,-122.4233'
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/sdds1.json?access_token=pk.eyJ1Ijoib2xla3NhbmRya29ibG9zaCIsImEiOiJja2hjYXUxM2IwNW9nMnFwZjBoanhnbmN2In0.a35O4wR4ebA4gHgHj0x6qA&limit=1'
request({url: url, json: true}, (error, response) => {

    if (error) {
        console.log('unable to retrieve api.weatherstack.com')
    }
    else if (response.body.error) {
        console.log(response.body.error.info)
    }
    else {
        console.log('The temperature outside is ' + response.body.current.temperature +
            ' feels like ' + response.body.current.feelslike)
    }

})

request({url: geoUrl, json: true}, (error, response) => {
    if (error) {
        console.log('unable to retrieve api.weatherstack.com')
    }
    else if(response.body.features.length === 0) {
        console.log('no location matches')
    }
    else {
        console.log(response.body.features[0].center[0])
    }
})