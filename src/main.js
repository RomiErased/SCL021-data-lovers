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
    //Crear etiqueta p para nombres
    const div = document.createElement("p");
    div.textContent = ` ${pokemons[i].name} `;
    pokedex.appendChild(div);
    //Crear etiqueta img para agregar imagenes
    const img = document.createElement("img");
    img.src = `${pokemons[i].img}`;
    pokedex.appendChild(cardPokemon);
    //Crear etiqueta p para obtener los tipos de pokemon
    const typePokemon = document.createElement("h5");
    typePokemon.textContent = `${pokemons[i].type}`;
    pokedex.appendChild(typePokemon);

    //Crear evento para abrir el popUp
    cardPokemon.addEventListener("click", () => {
      console.log(popUp.open)
      if (popUp.open === true) {
        while (popUp.children.length > 1) {
          popUp.removeChild(popUp.lastChild)
        }
      }
      popUp.open = true;
      const containerCardPokemon = document.createElement("div");
      containerCardPokemon.classList.add("containerCardPokemon");

      //Crear un div para traer el name
      const popUpName = document.createElement("h1");
      popUpName.innerHTML = pokemons[i].name;
      //Crear una clase para los name dentro del popUp
      popUpName.classList.add("popUp-name");

      //Crear un p para traer el number de cada pokemon
      const numberPokemon = document.createElement("p");
      numberPokemon.innerHTML = `Number: ${pokemons[i].num}`;

      //Crear un p para traer about
      const aboutPokemon = document.createElement("p");
      aboutPokemon.innerHTML = `About: ${pokemons[i].about}`;

      //Crear un div para traer las debilidades
      const weaknessesPokemon = document.createElement("p");
      weaknessesPokemon.innerHTML = `Weaknesses: ${pokemons[i].weaknesses}`;

      //Crear un div para traer el nombre de la generacion
      const generationPokemon = document.createElement("p");
      generationPokemon.innerHTML = `Generation:${pokemons[i].generation.name},  Number:${pokemons[i].generation.num}`;

      //Crear un div para traer las resistencias
      const resistantPokemon = document.createElement("p");
      resistantPokemon.innerHTML = `Resistance: ${pokemons[i].resistant}`;

      containerCardPokemon.appendChild(popUpName);
      containerCardPokemon.appendChild(numberPokemon);
      containerCardPokemon.appendChild(aboutPokemon);
      containerCardPokemon.appendChild(weaknessesPokemon);
      containerCardPokemon.appendChild(generationPokemon);
      containerCardPokemon.appendChild(resistantPokemon);
      popUp.appendChild(containerCardPokemon);
      

      close.addEventListener("click", () => {
        popUp.open = false;
        popUp.removeChild(containerCardPokemon);
      });
    });
    cardPokemon.appendChild(img);
    cardPokemon.appendChild(div);
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

