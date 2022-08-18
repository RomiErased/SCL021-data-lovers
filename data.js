//Filtrar según búsqueda
export const filterData = (data, condicion) => {
  const resultado = data.filter(function (pokemons) {
    return pokemons.name.includes(condicion);
  });
  return resultado;
};

//Ordenar alfabéticamente
export function handleSortChange(event, dataPokemon) {
  let result = [...dataPokemon];
  if (event.target.value === "a-z") {
    result.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  return result;
}

// Filtrar según tipo de pokemon
export function handleTypeChange(event, dataPokemon, renderpokemon) {
  let allPokemon = [...dataPokemon];
  if (event.target.value === "default") {
    renderpokemon(allPokemon);
    return;
  }
  const resultType = allPokemon.filter(function (allPokemon) {
    return allPokemon.type.includes(event.target.value);
  });
  return resultType;
}
