'use strict';

const { default: events } = require("inquirer/lib/utils/events");

function fetchData(url) {
  return fetch(url)
  .then((result) => {
    if (!result.ok) {
      throw new Error(`Failed to fetch data. Status: ${result.status}`);
    }
    return result.json();
  })
}

function fetchAndPopulatePokemons(pokemonData) {
  const mySelect = document.createElement("select");

  pokemonData.result.forEach((pokemon)=>{
    const optionPokemon = document.createElement("option");
    optionPokemon.value = pokemon.url;
    optionPokemon.text = pokemon.name;

    mySelect.appendChild(optionPokemon);
  })

  mySelect.addEventListener("change",async event =>{
    const selectedPokemonUrl = event.target.value;
    const selectedPokemon = await fetchData(selectedPokemonUrl);

    fetchImage(selectedPokemon.sprites.front_default);
  })
  document.body.appendChild(mySelect);
}

function fetchImage(pokemonUrl) {
  const imageContainer = document.getElementById('image-container');

  imageContainer.textContent = "";

  const myImg = document.createElement('img');
  myImg.className = "pokemon-img"
  myImg.src = pokemonUrl;

  imageContainer.appendChild(myImg);
}

async function main() {
    try {
      const pokemonList = await fetchData('https://pokeapi.co/api/v2/pokemon/');
      fetchAndPopulatePokemons(pokemonList);
    } catch (error) {
      console.log('Main function error:', error);
    }
  }

  window.addEventListener('load', main);