const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const breedImage = document.querySelector(".breed-image");
const breedDescription = document.querySelector(".breed-description");
const breedTemperament = document.querySelector(".breed-temperament");

window.addEventListener("load", selectBreed);
breedSelect.addEventListener("change",selectBreed);

import {fetchBreeds} from "./cat-api";

function selectBreed(e) {
   fetch(url, {headers: {"x-api-key": api_key}})
      .then((response) => {
            return response.json();
         })
      .then((data) => {
         errorEl.classList.add("hidden");
  
         let storedBreeds = fetchBreeds(breedSelect, data);

         let index = e.type === "load" ? 0 : breedSelect.value;

         breedImage.src= storedBreeds[index].image.url;  
         breedDescription.textContent= storedBreeds[index].description;
         breedTemperament.textContent= storedBreeds[index].temperament;
         })
      .catch(function(error) {
         errorEl.classList.remove("hidden");
         console.log(error);
      }
   );
}