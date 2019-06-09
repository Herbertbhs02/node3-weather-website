
 const request = require('request')

const forecast = (latitude,longitude,callback)=>{

    const url = 'https://api.darksky.net/forecast/3a44c7d48042dcf498b2414560c2debb/'+latitude+','+longitude
     
    request({url, json:true}, (error,{body})=>{
        
            if(error){
               callback('Unable to connect to weather service',undefined)
            }else if(body.error){callback('Unable to find location',undefined)

            }else{callback(undefined,'It is currenly: '+ body.currently.temperature +' there is 0% chance of rain')}
    }
    )}
module.exports = forecast




