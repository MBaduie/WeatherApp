// /* Global Variables */
// const generator = document.getElementById("generator");
// const apiKey = '&appid=f8ccfec10f8de41411740c3b38f27939&units=imperial';
// const apiBase = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
// generator.addEventListener('click', () => {
//     const zip = document.getElementById('zip').value;
//     const feeling = document.getElementById('feelings').value;
//     const url =`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
// })

// //get data from weather map 
// const getData = ()=>{
    
// }


////////////////////////////////////////////////////////////
// async function fn(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Hello bro')
//         },2000);
//     });
//     const err = false;
//     if(! err){
//         const res = await promise;
//         return res;
//     }else{
//         await Promise.reject(new Error('something went wrong'))
//     }
// }
// fn().then(res => console.log(res)).catch(err => console.log(err));

///////////////////////////////////////////////
async function getUsers(){
    //await response of fetching API
    const responce = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=10001&appid=f8ccfec10f8de41411740c3b38f27939&units=imperial');
    // proceed once its resolved
    const data = await responce.json();
    //proceed once second promise resolved
    return data;
}
getUsers().then(users => console.log(users))