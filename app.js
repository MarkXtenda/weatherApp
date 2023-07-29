const request = require('request')

const URL = 'http://api.weatherstack.com/current?access_key=8dcfe7aab1ec8bc4a6f020af54ba88b9&query=37.8267,-122.4233'

request({ url: URL, json: true }, (error, response)=>{
    const data = response.body
    console.log(`${data.current.weather_descriptions[0]}. It is curretly ${data.current.temperature} degrees out. It feels like ${data.current.feelslike} degrees out.`)
})

const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3BvbmdlLWJvYiIsImEiOiJjbGttYWlpajcwanhiM2lwbWwwZXVzcDVhIn0.xBVqgeXkF-5_9Z0fPbvB2g"

request({url: geoUrl, json: true}, (error, request)=>{
    const longitute = request.body.features[0].center[0]
    const latitude = request.body.features[0].center[1]
    console.log(longitute, latitude)
})