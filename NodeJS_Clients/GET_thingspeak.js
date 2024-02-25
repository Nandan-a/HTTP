const axios = require('axios')

// Program to make a simple GET request and parse the Response Body
const HOST = "http://localhost:";
const PORT = "3000"
const HTML_RES_PATH = "/"
const JSON_RES_PATH = '/json'
const DB_PATH = '/channels/2374100/feeds.json?api_key=KXOE9RDG01BBTMBQ&results=2'

// Make a GET request to Server

axios.get(HOST + PORT + DB_PATH)
    .then((response)=>{
        const RESPONSE_BODY  = JSON.stringify(response.data,null,2);
        // if(RESPONSE_BODY.status == 200){
            // console.log(response);
        console.log("Data: "+RESPONSE_BODY+". Response Code: "+ response.status)
        // }
    }).catch(error=>{
        console.log(error);
    })