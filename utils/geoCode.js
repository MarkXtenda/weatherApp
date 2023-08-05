const request = require('request')

module.exports = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic3BvbmdlLWJvYiIsImEiOiJjbGttYWlpajcwanhiM2lwbWwwZXVzcDVhIn0.xBVqgeXkF-5_9Z0fPbvB2g`
    request({url, json: true}, (error, {body: responseBody})=>{
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } 
        else if(responseBody.features.length === 0) {
            callback("The adress is wrong or missing.", undefined)
        }
        else {
            callback(undefined, {
                latitude: responseBody.features[0].center[1],
                longitude: responseBody.features[0].center[0],
                location: responseBody.features[0].place_name
            })
        }
    })
}
