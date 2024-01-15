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
    console.error(error);
  }
}

async function fetchAndPopulatePokemons(apiUrl) {
  try {
    const data = await fetchData(apiUrl);
    const selectElement = document.createElement('select');
    selectElement.addEventListener('change', async (event) => {
      const selectedIndex = event.target.value;
      const selectedPokemonUrl = `${apiUrl}/${selectedIndex}`;
      await fetchImage(selectedPokemonUrl);
    });

    data.results.forEach((pokemon, index) => {
      const optionElement = document.createElement('option');
      optionElement.value = index + 1;
      optionElement.textContent = pokemon.name;
      selectElement.appendChild(optionElement);
    });
    return selectElement;
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage(selectedPokemonUrl) {
  try {
    const pokemonData = await fetchData(selectedPokemonUrl);
    const pokeImg =
      document.getElementById('pokemonImage') || document.createElement('img');
    pokeImg.id = 'pokemonImage';
    pokeImg.src = pokemonData.sprites.front_default;
    if (!document.getElementById('pokemonImage')) {
      document.body.appendChild(pokeImg);
    }
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  try {
    const selectElement = await fetchAndPopulatePokemons(
      'https://pokeapi.co/api/v2/pokemon'
    );
    document.body.appendChild(selectElement);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', main);
