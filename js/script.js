//Unsplash API 
const count =10; //Number of photos to return
const apiKey= 'WpNj8CgocgeyAxAxzlEfkMp5tzoEpVfbkRESwuSPRMg';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;// filter in the get request to retrieve random pictures 

//Get photos from Unsplash API
async function getphotos(){
    try {
        const response = await fetch(apiUrl); //await request from api url 
        const data = await response.json(); // the response will run thruough the json message and returned as json 
        console.log(data);
    } catch (error) {
        // catch Error Here 
    }
}
// On load 
getphotos();