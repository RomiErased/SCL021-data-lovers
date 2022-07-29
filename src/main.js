import data from './data/pokemon/pokemon.js';


const pokedex = document.getElementById("root");

const dataPokemon = data.pokemon;
for (let i = 0; i < dataPokemon.length; i++) {
  // console.log(dataPokemon[i].name)

  //Crear etiqueta p para nombres
  const div = document.createElement("p");
  div.textContent = ` ${dataPokemon[i].name} `;
  pokedex.appendChild(div);
  //Crear etiqueta img para agregar imagenes
  const img = document.createElement("img")
  img.src = `${dataPokemon[i].img}`;
  pokedex.appendChild(img);
}


//console.log(dataPokemon[0]);
//console.log(data.pokemon);
//console.log(data);


console.log(data);
