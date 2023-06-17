const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

import {fetchBreeds} from "./cat-api";
import {fetchCatByBreed} from "./cat-api";

window.addEventListener("load", () => fetchBreeds(breedSelect, loaderEl, errorEl));
breedSelect.addEventListener("change", () => fetchCatByBreed(breedSelect.value));

export function fetchBreeds(selector, loaderElem, errorElem) {
    fetch(breedUrl, {headers: {"x-api-key": api_key}})
        .then((response) => {
            selector.classList.replace("visible", "hidden");
            loaderElem.classList.replace("hidden", "visible");
            errorElem.classList.replace("visible", "hidden");

            return response.json();
        })
        .then((breeds) => {
            selector.classList.replace("hidden", "visible");
            loaderElem.classList.replace("visible", "hidden");
            errorElem.classList.replace("visible", "hidden");
     
            breeds.forEach(breed => {
                let option = document.createElement('option');          
                option.value = breed.id;
                option.textContent = breed.name;
                selector.append(option);
            });      
        })
        .catch(() => {
            selector.classList.replace("visible", "hidden");
            loaderElem.classList.replace("visible", "hidden");
            errorElem.classList.replace("hidden", "visible");
        }
    );
}
 
export function fetchCatByBreed(catId) {
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