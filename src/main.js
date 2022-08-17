import data from "./data/pokemon/pokemon.js";
import {filterData, handleSortChange, handleTypeChange} from "./data.js";


const pokedex = document.getElementById("root");
const close = document.getElementById("close");

let dataPokemon = data.pokemon;
function renderpokemon(pokemons = dataPokemon) {
  pokedex.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    // Crear un div para cada pokemon
    const cardPokemon = document.createElement("div");
    cardPokemon.classList.add("pokemon-card");

    //Crear etiqueta p para nombres
    const pokemonCardName = document.createElement("p");
    pokemonCardName.textContent = `${pokemons[i].name} `;
    pokedex.appendChild(pokemonCardName);
    pokemonCardName.classList.add("pokemonCardName");

    //Crear etiqueta img para agregar imagenes
    const img = document.createElement("img");
    img.src = `${pokemons[i].img}`;
    pokedex.appendChild(cardPokemon);

    //Crear etiqueta p para obtener los tipos de pokemon
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

      //Crear una etiqueta p para traer el nombre de la generacion
      const generationPokemon = document.createElement("p");
      generationPokemon.innerHTML = `Generation:${pokemons[i].generation.name}  Number:${pokemons[i].generation.num}`;
      generationPokemon.classList.add("generationPokemon");

      //Crear una etiqueta p para traer las resistencias
      const resistantPokemon = document.createElement("p");
      resistantPokemon.innerHTML = `Resistance: ${pokemons[i].resistant}`;
      resistantPokemon.classList.add("resistantPokemon");

      //Crear una etiqueta p para traer los ataques basicos
      const quickPokemon = document.createElement("p");
      quickPokemon.innerHTML = `Quick Move: ${pokemons[i]["quick-move"][0].name}, ${pokemons[i]["quick-move"][1].name}`;
      quickPokemon.classList.add("quickPokemon");

      //Crear una etiqueta p para traer ataques especiales
      const attackPokemon = document.createElement("p");
      attackPokemon.textContent = "Special Attack: ";
      for (let j = 0; j < pokemons[i]["special-attack"].length; j++) {
       // 1. obtener el name del special-attack
       // 2. queremos concatenarlo en un string general 
       const specialAttack = pokemons[i]["special-attack"][j];
       const specialAttackName = specialAttack.name;
       attackPokemon.textContent = attackPokemon.textContent + specialAttackName;
     }
     attackPokemon.classList.add("attackPokemon");
      

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
const formSearch = document.querySelector(".search"); //funcion para que al dar enter o presionar search en barra de busqueda muestre los resultados
const selectSort = document.querySelector(".sort-AZ");
const selectType = document.querySelector(".select-type");
const popUp = document.querySelector("#popUp");

//Filtrar según busqueda
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  const result = filterData(dataPokemon, search.value);
  renderpokemon(result);
});


//Evento que se ejecuta al ordenar los pokemon A-Z
selectSort.addEventListener("change", (event) => {
  let sort = handleSortChange(event,dataPokemon)
  renderpokemon(sort)
});

//Evento que se ejecuta al seleccionar un tipo de pokemon
selectType.addEventListener("change",(event) => {
  let type = handleTypeChange(event, dataPokemon)
  renderpokemon(type);
});


//Funcionalidad de botón inferior derecho para subir al principio
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
