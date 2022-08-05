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

const search = document.querySelector(".inputSearch");
const button = document.querySelector(".button-search");
const selectFilter = document.querySelector("#select-filter");
const selectType = document.querySelector("#select-type");


// // //Teclado
// search.addEventListener("keyup", (e) => {
//   let search = e.target.value;
//   console.log(search);
// });

//Filtrar según busqueda
button.addEventListener("click", function () {
  const resultado = dataPokemon.filter(function (pokemon) {
    return pokemon.name.includes(search.value);
  });
  renderpokemon(resultado);
  console.log(resultado);
});

function handleChange (e){
  let result = [...dataPokemon]
  if (selectFilter.value === "a-z") {
    result.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
  renderpokemon(result.filter());
}

selectFilter.addEventListener("change",handleChange);
selectType.addEventListener("change",handleChange);





//console.log(dataPokemon[0]);
//console.log(data.pokemon);
//console.log(data);
