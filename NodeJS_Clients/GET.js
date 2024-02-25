const axios = require('axios')

// Program to make a simple GET request and parse the Response Body
const HOST = "http://localhost:";
const PORT = "3000"
const HTML_RES_PATH = "/"
const JSON_RES_PATH = '/json'
const DB_PATH = '/sensor/value'

// Make a GET request to Server
axios.get(HOST + PORT + DB_PATH,
    {headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiY2RhYyIsImlhdCI6MTcwMTkyNjMxOX0.mnFXWycqml6ouPXo8yXWVeUWf7BXr1gKtqatQwisC7s"}})
    .then((response)=>{
        const RESPONSE_BODY  = JSON.stringify(response.data,null,2);
        // if(RESPONSE_BODY.status == 200){
            // console.log(response);
        console.log("Data: "+RESPONSE_BODY+". Response Code: "+ response.status)
        // }
    }).catch(error=>{
        console.log(error);
    })