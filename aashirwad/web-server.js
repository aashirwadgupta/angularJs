//scripts folder contains details about server as in node server if we choose to use it
//the course built a express server npm install express@4.13.0 body-parser@1.13.1

//grab the express library and make it available 
var express = require('express');
//grab the path library
var path = require('path');
//create the express application by calling the express function
var app = express();
//create a rootpath variable
//variable __dirname is the variable which is pointing to current directory(inside which this file lies)
var rootPath = path.normalize(__dirname + '/../');

//now we tell express to serve our pages
//static function serve the pages in a given directory, without processing them at all
app.use(express.static(rootPath + '/app'));
//app to listen on the port
app.listen(8000);
console.log('Listening to the application on 8000...');