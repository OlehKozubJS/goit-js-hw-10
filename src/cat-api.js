const breedUrl = "https://api.thecatapi.com/v1/breeds";
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

export function selectBreeds(selector, loaderElem, errorElem) {
    fetch(breedUrl, {headers: {"x-api-key": api_key}})
        .then((response) => {
             loaderElem.classList.remove("hidden");
             return response.json();
        })
        .then((data) => {
            loaderElem.classList.add("hidden");
            errorElem.classList.add("hidden");
    
            let breeds = data.filter(img=> img.image?.url!=null);
 
            breeds.forEach(breed => {
                let option = document.createElement('option');
          
                if(breed.image) {
                    option.value = breed.id;
                    option.innerHTML = `${breed.name}`;
                    selector.append(option);
                }
            });      
        })
        .catch(function(error) {
            errorElem.classList.remove("hidden");
            console.log(error);
        }
    );
 }