const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')
const prompt = process.argv[2]

if (prompt) {
    geoCode(prompt, (error, data)=>{
        if (error) {
            return console.log(error)
        } 
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
        console.log(data.location)
        console.log(forecastData)
      })
    })
} else {
    console.log("City prompt was not provided")
}