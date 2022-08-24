import {
  filterByType,
  filterByName,
  filterByNum,
  searchByName,
} from "./data.js";
import data from "./data/pokemon/pokemon.js";
//* let para termos o datalist dos Pokémons *//
let pkmnDataList = data.pokemon;

/* Aparecer os pokemons no card */
const scrollCard = document.getElementById("cardScroll");

function pokemonList(pokemons) {
  scrollCard.innerHTML = "";

  pokemons.forEach((pokemon) => {
    const card = document.createElement("div");

    let typesPkmn = "";

    pokemon.type.forEach((type) => {
      typesPkmn += `<p class="type-style ${type}">${type}</p>`;
    });

    card.innerHTML = `
    <div class="card">
    <img src=${pokemon.img} alt="Foto pokémon">
    <p class="number-style">${pokemon.num}</p>
    <p class="name-style">${pokemon.name}</p>    
    <div class="type-teste">${typesPkmn}</div>
    </div>
    `;

    card.addEventListener("click", function () {
      openModal(pokemon);
    });

    scrollCard.appendChild(card);
  });
}

pokemonList(pkmnDataList);

/* Acionando os filtros */
const alphabeticOrdenation = document.getElementById("nameOrder");
const numberAscDescOrdenation = document.getElementById("numOrder");
const typeFilter = document.getElementById("typeOrder");

alphabeticOrdenation.addEventListener("change", function () {
  if (alphabeticOrdenation.value == "A-Z") {
    filterByName(pkmnDataList, "A-Z");
  } else {
    filterByName(pkmnDataList, "Z-A");
  }
  pokemonList(pkmnDataList);
});

numberAscDescOrdenation.addEventListener("change", function () {
  if (numberAscDescOrdenation.value == "0-9") {
    filterByNum(pkmnDataList, "0-9");
  } else {
    filterByNum(pkmnDataList, "9-0");
  }
  pokemonList(pkmnDataList);
});

typeFilter.addEventListener("change", function () {
  pkmnDataList = data.pokemon;
  if (typeFilter.value != "all") {
    pkmnDataList = filterByType(pkmnDataList, typeFilter.value);
  }
  pokemonList(pkmnDataList);
});

document
  .getElementById("searchByNameInput")
  .addEventListener("keyup", searchName);

function searchName(evento) {
  const name = evento.target.value;
  const result = searchByName(data.pokemon, name);
  pokemonList(result);
}

const clearButton = document.getElementById("cleanButton");
function cleanInput() {
  FormData.reset();
}
clearButton.addEventListener("click", cleanInput);

/*Modal*/
function openModal(pokemon) {
  const modal = document.getElementById("modalKnowMore");

  if (typeof modal == "undefined" || modal === null) {
    return;
  }

  let typesPkmn = "";

  pokemon.type.forEach((type) => {
    typesPkmn += `<p class="type-style ${type}">${type}</p>`;
  });

  let resistantPkmn = "";

  pokemon.resistant.forEach((resistant) => {
    resistantPkmn += `<p class="type-style ${resistant}">${resistant}</p>`;
  });

  let weaknessesPkmn = "";

  pokemon.weaknesses.forEach((weaknesses) => {
    weaknessesPkmn += `<p class="type-style ${weaknesses}">${weaknesses}</p>`;
  });

  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div class="modal-body">
      <div class="card-modal">
        <img src=${pokemon.img} alt="Foto pokémon">
        <p class="number-style">${pokemon.num}</p>
        <p class="name-style">${pokemon.name}</p>    
        <div class="type-teste">${typesPkmn}</div>
      </div> 

      <div class="modal-stats">
        <p class="modal-height">Altura: ${pokemon.size.height}</p>
        <p class="modal-weight">Peso: ${pokemon.size.weight}</p> <br>
        <p>Ataque: ${pokemon.stats["base-attack"]}</p>
        <p>Defesa: ${pokemon.stats["base-defense"]}</p>
        <p>Energia: ${pokemon.stats["base-stamina"]}</p>
        <p>HP: ${pokemon.stats["max-hp"]}</p>
      </div>
    </div>

    <div class="modal-types"> 
      <p class="modal-types-title">Resistências:</p>
      <div class="modal-types-display">${resistantPkmn}</div>
    </div>
    
    <div class="modal-types"> 
      <p class="modal-types-title">Fraquezas:</p>
      <div class="modal-types-display">${weaknessesPkmn}</div>
    </div>    
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

const button = document.getElementById("closeModalKnowMore");
button.addEventListener("click", closeModal);

function closeModal(mn) {
  const modal = document.getElementById("modalKnowMore");

  if (typeof modal == "undefined" || modal === null) {
    return;
  }

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
