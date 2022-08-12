import data from "./data/pokemon/pokemon.js";

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
      popUp.open = true;
      const containerCardPokemon = document.createElement("div");
      //Crear un div para traer el name 
      const popUpName = document.createElement("p");
      popUpName.innerHTML = pokemons[i].name;
     
      //Crear una clase para los name dentro del popUp
      popUpName.classList.add("popUp-name");
      
      //Crear un div para traer el number de cada pokemon
      const numberPokemon = document.createElement("p");
      numberPokemon.innerHTML = pokemons[i].num;
      
      //Crear un div para traer about
      const aboutPokemon = document.createElement("p");
      aboutPokemon.innerHTML = pokemons[i].about;
      
      //Crear un div para traer las debilidades
      const weaknessesPokemon = document.createElement("p");
      weaknessesPokemon.innerHTML = pokemons[i].weaknesses;
      
      //Crear un div para traer el nombre de la generacion
      const generationPokemon = document.createElement("p");
      generationPokemon.innerHTML = pokemons[i].generation.name;
      
      //Crear un div para traer el numero de la generacion
      const numPokemon = document.createElement("p");
      numPokemon.innerHTML = pokemons[i].generation.num;
      
      //Crear un div para traer las resistencias
      const resistantPokemon = document.createElement("p");
      resistantPokemon.innerHTML = pokemons[i].resistant;
      
      containerCardPokemon.appendChild(popUpName);
      containerCardPokemon.appendChild(numberPokemon);
      containerCardPokemon.appendChild(aboutPokemon);
      containerCardPokemon.appendChild(weaknessesPokemon);
      containerCardPokemon.appendChild(generationPokemon);
      containerCardPokemon.appendChild(numPokemon);
      containerCardPokemon.appendChild(resistantPokemon);
      popUp.appendChild(containerCardPokemon);
      close.addEventListener("click", () => {
        popUp.open = false;
        document.getElementById("popUp").innerHTML = "";
      });
      //Crear un div para traer quick-move NO FUNCIONA
      // const movePokemon = document.createElement ("div");
      // movePokemon.innerHTML = pokemons[i].quick-move.name;
      // popUp.appendChild(movePokemon);
      // Size con height y weight
      // special-attack
      //
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

// Cerrar popUp


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
// Filtrar según tipo de pokemon
function handleTypeChange(event) {
  //console.log(event.target.value);
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

selectSort.addEventListener("change", handleSortChange);
selectType.addEventListener("change", handleTypeChange);
