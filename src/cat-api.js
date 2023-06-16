const breedUrl = "https://api.thecatapi.com/v1/breeds";
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

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