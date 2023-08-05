const request = require('request')

module.exports = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=8dcfe7aab1ec8bc4a6f020af54ba88b9&query=${latitude},${longitude}`

    request({ url, json: true }, (error, {body: responseBody})=>{
        if (error) {
            callback("Unable to connect to weather server.", undefined)
        } 
        else if(responseBody.error || !longitude || !latitude) {
            callback("Unable to find location.", undefined)
        }
        else {
            const data = responseBody
            callback(undefined, `${data.current.weather_descriptions[0]}. It is curretly ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`)

        }
    })
}