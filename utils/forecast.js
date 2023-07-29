const request = require('request')

module.exports = (longitude, latitude, callback) => {
    const URL = `http://api.weatherstack.com/current?access_key=8dcfe7aab1ec8bc4a6f020af54ba88b9&query=${latitude},${longitude}`

    request({ url: URL, json: true }, (error, response)=>{
        if (error) {
            callback("Unable to connect to weather server.", undefined)
        } 
        else if(response.body.error || !longitude || !latitude) {
            callback("Coordinate error", undefined)
        }
        else {
            const data = response.body
            callback(undefined, `${data.current.weather_descriptions[0]}. It is curretly ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`)

        }
    })
}