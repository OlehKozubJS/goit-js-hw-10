export function fetchBreeds(selector, data) {
    //filter to only include those with an `image` object
    data = data.filter(img=> img.image?.url!=null)

    let storedBreeds = data;

    for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
        let option = document.createElement('option');
    
        //skip any breeds that don't have an image
        if(!breed.image)continue;
    
        //use the current array index
        option.value = i;
        option.innerHTML = `${breed.name}`;
        selector.appendChild(option);

    }

    return storedBreeds;
}