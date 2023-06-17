import {fetchBreeds} from "./cat-api";
import {fetchCatByBreed} from "./cat-api";

const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

[breedSelect, loaderEl, errorEl, catInfo].forEach((item) => {item.classList.add("hidden")});

window.addEventListener("load", fetchBreedsLogic);
breedSelect.addEventListener("change", fetchCatByBreedLogic);

export function fetchBreedsLogic() {
    breedSelect.classList.replace("visible", "hidden");
    loaderEl.classList.replace("hidden", "visible");
    errorEl.classList.replace("visible", "hidden");

    fetchBreeds()
        .then((breeds) => {
            breedSelect.classList.replace("hidden", "visible");
            loaderEl.classList.replace("visible", "hidden");
            errorEl.classList.replace("visible", "hidden");
     
            breeds.forEach(breed => {
                let option = document.createElement('option');          
                option.value = breed.id;
                option.textContent = breed.name;
                breedSelect.append(option);
            });      
        })
        .catch(() => {
            breedSelect.classList.replace("visible", "hidden");
            loaderEl.classList.replace("visible", "hidden");
            errorEl.classList.replace("hidden", "visible");
        }
    );
}
 
export function fetchCatByBreedLogic() {
    catInfo.classList.replace("visible", "hidden");
    loaderEl.classList.replace("hidden", "visible");
    errorEl.classList.replace("visible", "hidden");

    fetchCatByBreed(breedSelect.value)
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