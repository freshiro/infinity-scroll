const imageContainer = document.getElementById('image-container'); 
const loader = document.getElementById('loader'); 

let photosarray = [];// let allows variables to change 

//Unsplash API 
const count =30; //Number of photos to return
const apiKey= 'WpNj8CgocgeyAxAxzlEfkMp5tzoEpVfbkRESwuSPRMg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;// filter in the GET request to retrieve random pictures `


//Create Elements for Links and photos, add to DOM 
function displayPhotos(){
    photosarray.forEach( (photo) =>{
        //Create <a> to link to Unsplash
        const link = document.createElement('a');
        link.setAttribute('href', photo.links.html);
        link.setAttribute('target', '_blank');
        
        //Create <img> to link to Unsplash
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular)
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        // Put <img> inside<a>, then put both inside imageContainer Element 
        link.appendChild(img);
        imageContainer.appendChild(link);

    });
}




//Get photos from Unsplash API
async function getphotos(){
    try {
        const response = await fetch(apiUrl); //await request from api url 
      photosarray= await response.json(); // the response will run thruough the json message and returned as json 
        displayPhotos();
    } catch (error) {
        // catch Error Here 
    }
}
// On load 
getphotos();