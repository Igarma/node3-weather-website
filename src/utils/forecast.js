const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const weatherstackKey = 'f6c37bff323393d4eb11e8ded4d75f69'
    const url = `http://api.weatherstack.com/current?access_key=${weatherstackKey}&query=${latitude},${longitude}`

    // request(objOptions, callback);
    //request({ url }, (error, response) => {})
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //console.log(body.current);
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.weather_descriptions + '. Humidity: '+body.current.humidity)
        }
    })
}

module.exports = forecast