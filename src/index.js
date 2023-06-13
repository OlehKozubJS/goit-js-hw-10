const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const breedImage = document.querySelector(".breed-image");
const breedDescription = document.querySelector(".breed-description");
const breedTemperament = document.querySelector(".breed-temperament");

import {fetchBreeds} from "./cat-api";

window.addEventListener("load", selectBreed);
//breedSelect.addEventListener("change", breedOutput);

function selectBreed(e) {
   fetch(url, {headers: {"x-api-key": api_key}})
      .then((response) => {
            loaderEl.classList.remove("hidden");
            return response.json();
         })
      .then((data) => {
         loaderEl.classList.add("hidden");
         errorEl.classList.add("hidden");
  
         let storedBreeds = fetchBreeds(breedSelect, data);

         //let index = e.type === "load" ? 0 : breedSelect.value;

         breedOutput(storedBreeds, 0);
         })
      .catch(function(error) {
         errorEl.classList.remove("hidden");
         console.log(error);
      }
   );
}

/*

https://api.thecatapi.com/v1/images/search

*/

function breedOutput(breedArray, breedIndex) {
   breedImage.src= breedArray[breedIndex].image.url;  
   breedDescription.textContent= breedArray[breedIndex].description;
   breedTemperament.textContent= breedArray[breedIndex].temperament;
}