const catUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

import {selectBreeds} from "./cat-api";

window.addEventListener("load", () => selectBreeds(breedSelect, loaderEl, errorEl));
breedSelect.addEventListener("change", e => selectCat(e.currentTarget.value));

function selectCat(catId) {
   fetch(catUrl + catId, {headers: {"x-api-key": api_key}})
      .then((response) => {
            loaderEl.classList.remove("hidden");
            return response.json();
         })
      .then((data) => {
         loaderEl.classList.add("hidden");
         errorEl.classList.add("hidden");

         const breedData = data[0].breeds[0];

         catInfo.innerHTML = `
         <div class="cat-info">
         <img class="breed-image" src="https://cdn2.thecatapi.com/images/${breedData.reference_image_id}.jpg" alt="Cat Image">
         <div class="breed-text-info">
            <p class="breed-description">${breedData.description}</p>
            <p class="breed-temperament">${breedData.temperament}</p>
         </div>
         `;
         })
      .catch(function() {
         errorEl.classList.remove("hidden");
      }
   );
}