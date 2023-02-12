// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


/* Setup Server*/
//server port
const port = 3000;
//listening to port call 
app.listen(port, () => {
    console.log(`Server runs on port:${port}`);
});


// Post Data to Server
function postData(req, res) {
    //taking object body 'Data'
    projectData = req.body;
    //store data in object 'DataBase'
    res.send(projectData);
    console.log(projectData);
};
//POST data to server throw express
app.post('/add', postData);
 

//Get Data From server=
function fetchData (req, res){
    res.send(projectData);
    // console.log(res);
}
//GET data from server throw express
app.get("/all", fetchData);