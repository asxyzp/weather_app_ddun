/*
    NAME : index.js
    UTILITY : Script file for weather_app
    CREATED BY : Aashish Loknath Panigrahi (@asxyzp)
*/

//Function for fetching & displaying weather details
let weatherDetails = () =>{
    fetch('http://localhost:9999/data')
    .then(res=>res.json())
    .then(data=>{
        $('.date-val').text(Date(data[0]["dt"]).substr(0,25));
        $('.lon-val').text(data[0]['coord']['lon']);
        $('.lat-val').text(data[0]['coord']['lat']);
        $('.temp-val').text(data[0]['main']['temp']);
        $('.feel-val').text(data[0]['main']['feels_like']);
        $('.sea-val').text(data[0]['main']['sea_level']);
        $('.pressure-val').text(data[0]['main']['pressure']);
        $('.wspeed-val').text(data[0]['wind']['speed']);
        $('.wdeg-val').text(data[0]['wind']['deg']);
        $('.humid-val').text(data[0]['main']['humidity']);
        $('.visible-val').text(String(Number(data[0]['visibility'])/1000));
        console.log(data[0]);
    });
};
weatherDetails();

window.setInterval(()=>{
    $('.update-btn').width($('.date-location').width());
},100);

$(document).ready(()=>{
    $('.update-btn').click(()=>{
        weatherDetails();
    });
});