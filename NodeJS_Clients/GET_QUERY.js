const axios = require('axios')

// Program to make a simple GET request and parse the Response Body
const HOST = "http://localhost:";
const PORT = "3000"
const PATH = "/sensor/query"

const REQUEST_Query = {
    params:{
        id: 2
    }
}
// Make a GET request to Server
axios.get(HOST + PORT + PATH, REQUEST_Query)
    .then((response)=>{
        console.log(response);
        // const RESPONSE_BODY  = JSON.stringify(response.data,null,2);
        // console.log("Data: "+RESPONSE_BODY+". Response Code: "+ response.status)
    }).catch(error=>{
        console.log(error);
    })