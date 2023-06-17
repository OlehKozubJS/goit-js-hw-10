const breedUrl = "https://api.thecatapi.com/v1/breeds";
const catUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const api_key = "live_iTXFzPkHdC4oTgN59kH3GxZuT9eSiCYByP1BBv24lnnQqDZPMjk0iJuaj0bMHA4W";

export async function fetchBreeds() {
    const response = await fetch(breedUrl, { headers: { "x-api-key": api_key } });
    return await response.json();
}
 
export async function fetchCatByBreed(catId) {
    const response = await fetch(catUrl + catId, { headers: { "x-api-key": api_key } });
    return await response.json();
}