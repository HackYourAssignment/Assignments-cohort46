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
            throw new Error(`HTTP error! ${response.status}`);
        }

        const fetchedData = await response.json()
        return fetchedData;

    } catch (err) {
        console.error(`ERROR`, err);
        throw err;
    }
}

function fetchAndPopulatePokemons() {
    //create elements
    const button = document.createElement('button');
    button.textContent = `Get Pokemon`;
    button.type = 'button';
    document.body.appendChild(button);

    const selectMenu = document.createElement('select');
    selectMenu.id = 'selectPok';
    document.body.appendChild(selectMenu);


    button.addEventListener('click', async () => {
        try {
            const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

            selectMenu.value = '';

            data.results.forEach(el => {
                const option = document.createElement('option');
                option.value = el.name;
                option.textContent = el.name;
                selectMenu.appendChild(option);
            });

        } catch (err) {
            console.error('ERROR:', err);
        }
    });
}

async function fetchImage(pokemonName) {
    try {
        const pokIdUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const pokData = await fetchData(pokIdUrl);

        const pokImg = document.createElement('img');
        pokImg.id = 'PokemonImg';
        pokImg.src = pokData.sprites.front_default;
        pokImg.alt = pokemonName;

        document.body.appendChild(pokImg);

    } catch (err) {
        console.log('Failure: Fetching Image')
    }
}

function main() {
    fetchAndPopulatePokemons();

    const selectPok = document.getElementById('selectPok');
    selectPok.addEventListener('change', async (e) => {
        const selectedElement = e.target.value;

        const currentImg = document.getElementById('PokemonImg');
        if (currentImg) {
            currentImg.remove();
        }

        await fetchImage(selectedElement);
    });
}

window.addEventListener('load', main);
