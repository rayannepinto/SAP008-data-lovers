import data from "./data/pokemon/pokemon.js";

import { filterByType, filterByName, filterByNum } from "./data.js";

//* const para termos o datalist dos Pokémons *//
const pkmnDataList = data.pokemon;

//* Aparecer os pokemons no card *//
const scrollCard = document.getElementById("scroll-card");

pkmnDataList.forEach((pokemon) => {
  const card = document.createElement("div");

  card.innerHTML = `
  <div class="card">
  <img src=${pokemon.img} alt="foto pokemon">
  <p>${pokemon.num}</p>
  <p>${pokemon.name}</p>
  <p>${pokemon.type}</p>
  </div>
  `;

  scrollCard.appendChild(card);
});
