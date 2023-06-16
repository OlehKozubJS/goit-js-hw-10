const catUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

import {fetchBreeds} from "./cat-api";

window.addEventListener("load", () => fetchBreeds(breedSelect, loaderEl, errorEl));
breedSelect.addEventListener("change", () => fetchCatByBreed(breedSelect.value));

function fetchCatByBreed(catId) {
   fetch(catUrl + catId, {headers: {"x-api-key": api_key}})
      .then((response) => {
         catInfo.classList.replace("visible", "hidden");
         loaderEl.classList.replace("hidden", "visible");
         errorEl.classList.replace("visible", "hidden");
         
         return response.json();
      })
      .then((data) => {
         catInfo.classList.replace("hidden", "visible");
         loaderEl.classList.replace("visible", "hidden");
         errorEl.classList.replace("visible", "hidden");

         const breedData = data[0].breeds[0];

         catInfo.innerHTML = `
            <div class="cat-info-content">
            <img class="breed-image" src="https://cdn2.thecatapi.com/images/${breedData.reference_image_id}.jpg" alt="Cat Image">
            <div class="breed-text-info">
               <p class="breed-description">${breedData.description}</p>
               <p class="breed-temperament">${breedData.temperament}</p>
            </div>
         `;
         })
      .catch(() => {
         catInfo.classList.replace("visible", "hidden");
         loaderEl.classList.replace("visible", "hidden");
         errorEl.classList.replace("hidden", "visible");
      });
}