export function fetchBreeds(selector, data) {
    //filter to only include those with an `image` object
    data = data.filter(img=> img.image?.url!=null)

    let breeds = data;

    breeds.forEach((breed, i) => {
        let option = document.createElement('option');
    
        if(breed.image) {
            option.value = i;
            option.innerHTML = `${breed.name}`;
            selector.append(option);
        }
    });

    return breeds;
}