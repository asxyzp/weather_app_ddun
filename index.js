/*
    Program : Accessing weather details using OpenWeatherMap API & storing it in JSON
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const fs = require('fs');                                           //Accessing file system module
const fetch = require('node-fetch');                                //Accessing fetch module
const env = require('dotenv').config({path: __dirname + '/.env'});  //Accessing dotenv module
const token = env['parsed']['API_TOKEN'];                           //Reading API token in .env file
const path  = require('path');                                      //Accessing path module

//Weather details stored in JSON file will be updated twice in a minute
setInterval(()=>{
    //Accessing weather details using city ID for Dehradun using OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=1273313&appid=${token}&units=metric`)
    .then(res=>res.json())
    .then(data=>{ 
        //Storing JSON data in db.json file
        fs.writeFile(path.join(__dirname,'db.json'),`{"data" : [${JSON.stringify(data)}]}`,(err)=>{
            if (err) throw err;
        });    
    })
    .catch((err)=>{                             //For catching error
        if (err){
            console.error(`ERROR : ${err}`)
        }
    });
},1000);