export const fetchPokemon = () => {
  const url = `https://github.com/Macamescobar/SCL021-data-lovers/blob/main/src/data/pokemon/pokemon.json/001`;
  fetch (url)
  .then (res => {
      return res.json();
  })
  .then (data => {
      console.log(data);
      const pokemon = {};
      pokemon['name'] = data.name;
      console.log(pokemon);
  });
}

fetchPokemon();

