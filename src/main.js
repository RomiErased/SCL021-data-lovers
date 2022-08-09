import data from "./data/pokemon/pokemon.js";

const pokedex = document.getElementById("root");

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

    cardPokemon.appendChild(img);
    cardPokemon.appendChild(div);
    cardPokemon.appendChild(typePokemon);
  }
}
renderpokemon();
//funcion para recargar la página desde el header
const title = document.querySelector(".title");
title.addEventListener("click", function () {
  location.reload();
});

const search = document.querySelector(".inputSearch");
const formSearch = document.querySelector(".search"); //funcion para que al dar enter o presionar search en barra buscadora muestre los resultados
const selectSort = document.querySelector(".sort-AZ");
const selectType = document.querySelector(".select-type");

//Filtrar según busqueda
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  const resultado = dataPokemon.filter(function (pokemons) {
    return pokemons.name.includes(search.value);
  });
  renderpokemon(resultado);
});

// Ordenar alfabéticamente
function handleSortChange(event) {
  //console.log(event.target.value);
  let result = [...dataPokemon];
  if (event.target.value === "a-z") {
    result.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  renderpokemon(result);
}

function handleTypeChange(event) {
  console.log(event.target.value);
  let result = [...dataPokemon];
  if (event.target.value === "bug") {
    result.filter((pokemon) => pokemon.type === "bug");
  }
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
