const request = require('request')

module.exports = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3BvbmdlLWJvYiIsImEiOiJjbGttYWlpajcwanhiM2lwbWwwZXVzcDVhIn0.xBVqgeXkF-5_9Z0fPbvB2g`
    request({url: geoUrl, json: true}, (error, response)=>{
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } 
        else if(response.body.features.length === 0) {
            callback("The adress is wrong or missing.", undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}
