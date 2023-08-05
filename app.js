const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

const prompt = process.argv[2]

if (prompt) {
    geoCode(prompt, (error, {latitude, longitude, location} = {})=>{
        if (error) {
            return console.log(error)
        } 
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
        console.log(location)
        console.log(forecastData)
      })
    })
} else {
    console.log("City prompt was not provided")
}