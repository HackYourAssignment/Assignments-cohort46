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
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

function fetchAndPopulatePokemons(data) {
  const pokemonList = document.createElement('select');
  pokemonList.id = 'pokemon-list';

  data.results.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.name;
    option.textContent = pokemon.name;
    pokemonList.appendChild(option);
  });

  document.body.appendChild(pokemonList);

  pokemonList.addEventListener('change', () => {
    fetchImage(pokemonList.value);
  });
}

async function fetchImage(selectedPokemon) {
  try {
    const data = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );

    const existingImg = document.getElementById('images');
    if (existingImg) {
      existingImg.remove();
    }

    const img = document.createElement('img');
    img.id = 'images';
    img.alt = selectedPokemon;
    img.src = data.sprites.front_default;

    document.body.appendChild(img);
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  try {
    const getBtn = document.createElement('button');
    getBtn.id = 'get-btn';
    getBtn.type = 'button';
    getBtn.textContent = 'Get Pokemons!';
    document.body.appendChild(getBtn);

    getBtn.addEventListener('click', async () => {
      const data = await fetchData(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      console.log(data);
      fetchAndPopulatePokemons(data);
    });
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', main);
