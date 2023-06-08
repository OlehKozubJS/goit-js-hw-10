const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

/*

"api_key=live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"

"https://api.thecatapi.com/v1/breeds"

*/

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";
let storedBreeds = [];

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filter to only include those with an `image` object
   data = data.filter(img=> img.image?.url!=null)
   
  storedBreeds = data;
   
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!breed.image) continue;
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
breedSelect.appendChild(option);
    
    }
   //show the first breed by default
   showBreedImage(0);
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  //document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
  catInfo.textContent = storedBreeds[index].temperament;
  
  //document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
  //document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
}
