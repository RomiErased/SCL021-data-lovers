import data from "./data/pokemon/pokemon.js";

const pokedex = document.getElementById("root");

const dataPokemon = data.pokemon;
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

const search = document.querySelector(".inputSearch");
const button = document.querySelector(".button-search");

// //Teclado
search.addEventListener("keyup", (e) => {
  let search = e.target.value;
  console.log(search);
});

//Button
button.addEventListener("click", function () {
  const resultado = dataPokemon.filter(function (pokemon) {
    return pokemon.name.includes(search.value);
  });
  renderpokemon(resultado);
  console.log(resultado);
});

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

//console.log(dataPokemon[0]);
//console.log(data.pokemon);
//console.log(data);
