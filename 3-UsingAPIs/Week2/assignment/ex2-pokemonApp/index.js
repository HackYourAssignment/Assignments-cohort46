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
const POKI_API = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Network error! ' + error);
  }
}

async function fetchAndPopulatePokemons(url) {
  try {
    const data = await fetchData(url);
    const selectElement = document.createElement('select');
    selectElement.id = 'pokemon-list';

    // Populate the <select> element with the list of pokemons
    data.results.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });

    // Append the <select> element to the body once
    document.body.appendChild(selectElement);
    selectElement.addEventListener('change', () => {
      fetchImage(selectElement.value);
    });
  } catch (error) {
    console.log('Error fetching and populating pokemons:', error.message);
  }
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
    const pokiBtn = document.createElement('button');
    pokiBtn.id = 'poki-btn';
    pokiBtn.type = 'button';
    pokiBtn.textContent = 'Get Pokemons!';
    document.body.appendChild(pokiBtn);

    pokiBtn.addEventListener('click', async () => {
      // Pass the URL, not the entire data object
      await fetchAndPopulatePokemons(POKI_API);
    });
  } catch (error) {
    console.error(error);
  }
}

window.onload = main;  
