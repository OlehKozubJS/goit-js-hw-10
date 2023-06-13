const catUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const breedImage = document.querySelector(".breed-image");
const breedDescription = document.querySelector(".breed-description");
const breedTemperament = document.querySelector(".breed-temperament");

import {selectBreeds} from "./cat-api";

window.addEventListener("load", () => selectBreeds(breedSelect, loaderEl, errorEl, breedImage, breedDescription, breedTemperament));
breedSelect.addEventListener("change", selectCat);

function selectCat() {
   fetch(catUrl + breedSelect.value, {headers: {"x-api-key": api_key}})
      .then((response) => {
            loaderEl.classList.remove("hidden");
            return response.json();
         })
      .then((data) => {
         loaderEl.classList.add("hidden");
         errorEl.classList.add("hidden");
  
         console.log(data[0].breeds[0]);
         //let breedData = data[0].breeds[0];

         breedOutput(data[0].breeds[0]);
         })
      .catch(function(error) {
         errorEl.classList.remove("hidden");
         console.log(error);
      }
   );
}

function breedOutput(breedData) {
   breedImage.src= `https://cdn2.thecatapi.com/images/${breedData.reference_image_id}.jpg`;   
   breedDescription.textContent= breedData.description;
   breedTemperament.textContent= breedData.temperament;
}