/* Global Variables */
const generator = document.getElementById("generate");
const apiBase = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'f8ccfec10f8de41411740c3b38f27939&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
const action = () => {
    // debugger;
    const zip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=`;
    //calling function to get Weather Data
    getData(url).then(data => {
        const fullData = {
            myTemp: data.main.temp,
            myFelling: feeling,
            today: newDate
        };
        // calling function of sending data to server then calling function that view data 
        postData('/add', fullData);
    }).then(retrieveData())
};

//get data from weather map 
const getData = async (url) => {
    //merge full link 
    const fullUrl = url + apiKey;
    //fetching API url to get data from site 
    const res = await fetch(fullUrl);
    try {
        // Transform into JSON
        const fullData = await res.json();
        // console.log(date);
        return fullData;
    } catch (error) {
        console.log("error", error);
    }
}

//send data to server
const postData = async (route, data) => {
    //fetching data by changing fetch method default behavior from GET to POST
    const res = await fetch(route, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    try {
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log('error', error);       
}
}
//view Data on page
const retrieveData = async () => {
    // debugger;
    const request = await fetch("/all");
    try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
        console.log('Error', error);
    }
   }

//generate Event take action on click
generator.addEventListener('click',action);
