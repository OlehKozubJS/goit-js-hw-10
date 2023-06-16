const breedSelect = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

import {fetchBreeds} from "./cat-api";
import {fetchCatByBreed} from "./cat-api";

window.addEventListener("load", () => fetchBreeds(breedSelect, loaderEl, errorEl));
breedSelect.addEventListener("change", () => fetchCatByBreed(breedSelect.value));
