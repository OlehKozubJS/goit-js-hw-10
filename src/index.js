const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
const breedImage = document.querySelector(".breed-image");
const breedDescription = document.querySelector(".breed-description");
const breedTemperament = document.querySelector(".breed-temperament");

import {fetchBreeds} from "./cat-api"; 

window.addEventListener("load", fetchBreeds);
breedSelect.addEventListener("change", selectBreedFunction);

function selectBreedFunction() {
   let index = breedSelect.value;

   breedImage.src= storedBreeds[index].image.url;  
   breedDescription.textContent= storedBreeds[index].description;
   breedTemperament.textContent= storedBreeds[index].temperament;
}
