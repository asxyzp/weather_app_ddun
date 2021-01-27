/*
    Program : Accessing weather details using OpenWeatherMap API & storing it in JSON
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const fs = require('fs');                                           //Accessing file system module
const fetch = require('node-fetch');                                //Accessing fetch module
const env = require('dotenv').config({path: __dirname + '/.env'});  //Accessing dotenv module
const token = env['parsed']['API_TOKEN'];                           //Reading API token in .env file

//Accessing weather details using city ID for Dehradun using OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?id=1273313&appid=${token}`)
.then(res=>res.json())
.then(data=>{
    
});