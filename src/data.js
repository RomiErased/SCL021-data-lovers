

export const filterData = (data,condicion) => {
    const resultado = data.filter(function (pokemons) {
        return pokemons.name.includes(condicion);
    });
    return resultado;
}

