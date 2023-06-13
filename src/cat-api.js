const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
const breedImage = document.querySelector(".breed-image");
const breedDescription = document.querySelector(".breed-description");
const breedTemperament = document.querySelector(".breed-temperament");

export function fetchBreeds() {
    let storedBreeds = [];

    fetch("https://api.thecatapi.com/v1/breeds", {headers: {
       "x-api-key": "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W"
    }})
    .then((response) => {
       return response.json();
    })
    .then((data) => {
 
       //filter to only include those with an `image` object
       data = data.filter(img=> img.image?.url!=null)
 
       storedBreeds = data;
 
       for (let i = 0; i < storedBreeds.length; i++) {
          const breed = storedBreeds[i];
          let option = document.createElement('option');
       
          //skip any breeds that don't have an image
          if(!breed.image)continue;
       
          //use the current array index
          option.value = i;
          option.innerHTML = `${breed.name}`;
          breedSelect.appendChild(option);
       }
       //show the first breed by default  
       return storedBreeds;
    })
    .catch(function() {
       error.classList.remove("hidden");
    });
 }