import data from "./data/pokemon/pokemon.js";

const pokedex = document.getElementById("root");

const dataPokemon = data.pokemon;
for (let i = 0; i < dataPokemon.length; i++) {
  // Crear un div para cada pokemon
  const cardPokemon = document.createElement("div");
  cardPokemon.classList.add("pokemon-card");
  //Crear etiqueta p para nombres
  const div = document.createElement("p");
  div.textContent = ` ${dataPokemon[i].name} `;
  pokedex.appendChild(div);
  //Crear etiqueta img para agregar imagenes
  const img = document.createElement("img");
  img.src = `${dataPokemon[i].img}`;
  pokedex.appendChild(cardPokemon);
  //Crear etiqueta p para obtener los tipos de pokemon
  const typePokemon = document.createElement("h5");
  typePokemon.textContent = `${dataPokemon[i].type}`;
  pokedex.appendChild(typePokemon);

  cardPokemon.appendChild(img);
  cardPokemon.appendChild(div);
  cardPokemon.appendChild(typePokemon);
}

const search = document.querySelector('.inputSearch');

search.addEventListener('keyup',(e) => {
    console.log(e.target.value)
});



//console.log(dataPokemon[0]);
//console.log(data.pokemon);
//console.log(data);
