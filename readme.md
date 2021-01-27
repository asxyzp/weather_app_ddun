NAME : weather_app<br>
DESCRIPTION : Weather app showing weather details of Dehradun<br>
CREATED BY : Aashish Loknath Panigrahi<br>

WHAT IT DOES : index.js script file fetches weather data of Dehradun & stores the data in db.json file. json-server allows the db.json file to be accessed as a REST API.<br>

TO INSTALL PACKAGES IN THE CONFIG.JS FILE : npm install
HOW TO RUN (USE IN THIS PARTICULAR ORDER) :
1. npm run start    //Starts fetching weather API & storing it in JSON file
2. npm run serve    //Serving JSON file using json-server module
3. Open index.html file in /assets for viewing weather data

NOTE : Access key for the OpenWeatherMap API exists in .env file
