const breedUrl = "https://api.thecatapi.com/v1/breeds";
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

export function fetchBreeds(selector, loaderElem, errorElem) {
    fetch(breedUrl, {headers: {"x-api-key": api_key}})
        .then((response) => {
             loaderElem.classList.remove("hidden");
             return response.json();
        })
        .then((breeds) => {
            loaderElem.classList.add("hidden");
            errorElem.classList.add("hidden");
     
            breeds.forEach(breed => {
                let option = document.createElement('option');          
                option.value = breed.id;
                option.textContent = breed.name;
                selector.append(option);
            });      
        })
        .catch(() => {
            errorElem.classList.remove("hidden");
        }
    );
 }