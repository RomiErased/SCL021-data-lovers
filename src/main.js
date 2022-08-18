import data from "./data/pokemon/pokemon.js";
import { filterData } from "./data.js";

const pokedex = document.getElementById("root");
const close = document.getElementById("close");

let dataPokemon = data.pokemon;
function renderpokemon(pokemons = dataPokemon) {
  pokedex.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    // Crear un div para cada pokemon
    const cardPokemon = document.createElement("div");
    cardPokemon.classList.add("pokemon-card");

    //Crear etiqueta p para nombres y clase
    const pokemonCardName = document.createElement("p");
    pokemonCardName.textContent = ` ${pokemons[i].name} `;
    pokedex.appendChild(pokemonCardName);
    pokemonCardName.classList.add("pokemonCardName");

    //Crear etiqueta img para agregar imagenes
    const img = document.createElement("img");
    img.src = `${pokemons[i].img}`;
    pokedex.appendChild(cardPokemon);

    //Crear etiqueta p para obtener los tipos de pokemon y clase
    const typePokemon = document.createElement("p");
    typePokemon.textContent = `${pokemons[i].type}`;
    pokedex.appendChild(typePokemon);
    typePokemon.classList.add("typePokemonCard");

    //Crear evento para abrir el popUp
    cardPokemon.addEventListener("click", () => {
      if (popUp.open === true) {
        while (popUp.children.length > 1) {
          popUp.removeChild(popUp.lastChild);
        }
      }
      popUp.open = true;

      // Crear div padre
      const containerCardPokemon = document.createElement("div");
      containerCardPokemon.classList.add("containerCardPokemon");

      //Crear etiqueta p para traer el nombre y numero
      const popUpName = document.createElement("p");
      popUpName.innerHTML = `${pokemons[i].name}  #${pokemons[i].num}`;
      popUpName.classList.add("namePokemon");

      //Crear un p para traer about
      const aboutPokemon = document.createElement("p");
      aboutPokemon.innerHTML = `About this pokemon: ${pokemons[i].about}`;
      aboutPokemon.classList.add("aboutPokemon");

      //Crear un p para traer las debilidades
      const weaknessesPokemon = document.createElement("p");
      weaknessesPokemon.innerHTML = `Weaknesses: ${pokemons[i].weaknesses}`;
      weaknessesPokemon.classList.add("weaknessesPokemon");

      //Crear un div para traer el nombre de la generacion
      const generationPokemon = document.createElement("p");
      generationPokemon.innerHTML = `Generation:${pokemons[i].generation.name}  Number:${pokemons[i].generation.num}`;
      generationPokemon.classList.add("generationPokemon");

      //Crear un div para traer las resistencias
      const resistantPokemon = document.createElement("p");
      resistantPokemon.innerHTML = `Resistance: ${pokemons[i].resistant}`;
      resistantPokemon.classList.add("resistantPokemon");

      //Crear un div para traer los ataques basicos
      const quickPokemon = document.createElement("p");
      quickPokemon.innerHTML = `Quick Move: ${pokemons[i]["quick-move"][0].name}, ${pokemons[i]["quick-move"][1].name}`;
      quickPokemon.classList.add("quickPokemon");

      //Crear un div para traer los ataques especiales
      const attackPokemon = document.createElement("p");
      attackPokemon.textContent = "Special Attack: ";
      //console.log(pokemons[i]["special-attack"]);
      let arrAttacksPokemon = pokemons[i]["special-attack"]
        .map((item) => item.name)
        .join(", ");
      attackPokemon.textContent = attackPokemon.textContent + arrAttacksPokemon;
      attackPokemon.classList.add("attackPokemon");

      /*${pokemons[i]["special-attack"][1].name}, 
     ${pokemons[i]["special-attack"][2].name};*/

      containerCardPokemon.appendChild(popUpName);
      containerCardPokemon.appendChild(aboutPokemon);
      containerCardPokemon.appendChild(weaknessesPokemon);
      containerCardPokemon.appendChild(generationPokemon);
      containerCardPokemon.appendChild(resistantPokemon);
      containerCardPokemon.appendChild(quickPokemon);
      containerCardPokemon.appendChild(attackPokemon);

      popUp.appendChild(containerCardPokemon);

      close.addEventListener("click", () => {
        popUp.open = false;
        popUp.removeChild(containerCardPokemon);
      });
    });
    cardPokemon.appendChild(img);
    cardPokemon.appendChild(pokemonCardName);
    cardPokemon.appendChild(typePokemon);
  }
}
renderpokemon();

//Funcion para recargar la página desde el header
const title = document.querySelector(".title");
title.addEventListener("click", function () {
  location.reload();
});

const search = document.querySelector(".inputSearch");
const formSearch = document.querySelector(".search"); //funcion para que al dar enter o presionar search en barra buscadora muestre los resultados
const selectSort = document.querySelector(".sort-AZ");
const selectType = document.querySelector(".select-type");
const popUp = document.querySelector("#popUp");

//Filtrar según busqueda
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  const result = filterData(dataPokemon, search.value);
  renderpokemon(result);
});

// Ordenar alfabéticamente
function handleSortChange(event) {
  let result = [...dataPokemon];
  if (event.target.value === "a-z") {
    result.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  renderpokemon(result);
}
// Filtrar según tipo de pokemon
function handleTypeChange(event) {
  let allPokemon = [...dataPokemon];
  if (event.target.value === "default") {
    renderpokemon(allPokemon);
    return;
  }
  const resultType = allPokemon.filter(function (allPokemon) {
    return allPokemon.type.includes(event.target.value);
  });
  renderpokemon(resultType);
}

selectSort.addEventListener("change", handleSortChange);
selectType.addEventListener("change", handleTypeChange);

//funcionalidad de botón inferior derecho para subir al principio
addEventListener("DOMContentLoaded", () => {
  const irArribaBoton = document.querySelector("#irArribaBoton");

  const obtener_pixeles_inicio = () =>
    document.documentElement.scrollTop || document.body.scrollTop;

  const irArriba = () => {
    if (obtener_pixeles_inicio() > 0) {
      requestAnimationFrame(irArriba);
      scrollTo(0, obtener_pixeles_inicio() - obtener_pixeles_inicio() / 20);
    }
    const indicarScroll = () => {
      if (obtener_pixeles_inicio() > 50) {
        irArribaBoton.className = "mostrar";
      } else {
        irArribaBoton.className = "ocultar";
      }
    };
    window.addEventListener("scroll", indicarScroll);
  };
  irArribaBoton.addEventListener("click", irArriba);
});
