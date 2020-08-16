const request = require('postman-request')

const geocode = (address, callback) => {
    const token = 'pk.eyJ1IjoiaWduYXNpNjIiLCJhIjoiY2tkcjZpc2wyMWJzYjJxdHZ6OXVwbnowcyJ9.43NZLV0a9bt8UuYsRB6Rfg'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}&limit=1`


    // const request = require('request');
 
    // const options = {
    //   url: 'https://api.github.com/repos/request/request',
    //   headers: {
    //     'User-Agent': 'request'
    //   }
    // };
     
    // function callback(error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     const info = JSON.parse(body);
    //     console.log(info.stargazers_count + " Stars");
    //     console.log(info.forks_count + " Forks");
    //   }
    // }
     
    // request(options, callback);
    //request({ url }, (error, response) => {})

    // destructurem boy de response
    request({ url, json: true }, (error, { body }) => {
        //console.log(body);
        
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode