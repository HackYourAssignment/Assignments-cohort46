'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

async function fetchAndPopulatePokemons(url, selectElement) {
  try {
    const response = await fetchData(url);
    const data = response.results; // Adjust this line based on the actual structure

    console.log('Data:', data);

    if (!Array.isArray(data)) {
      throw new Error('Data is not an array.');
    }

    data.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.text = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating pokemons:', error.message);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
  } catch (error) {
    console.error('Error fetching image:', error.message);
  }
}

function main() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const selectElement = document.querySelector('select');
  const imgElement = document.querySelector('img');

  if (selectElement && imgElement) {
    fetchAndPopulatePokemons(apiUrl, selectElement);

    selectElement.addEventListener('change', async () => {
      const selectedPokemonUrl = selectElement.value;
      await fetchImage(selectedPokemonUrl, imgElement);
    });
  } else {
    console.error('Select or img element not found.');
  }
}

document.addEventListener('DOMContentLoaded', main);
