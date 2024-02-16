async function fetchPokemons() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        if (!response.ok) {
            throw new Error(`Erro ao buscar cards na api, retorno codigo ${response.status}`)
        }
        const pokemonsData = await response.json()
        return pokemonsData;

    } catch (error) {
        console.error(`Erro ao buscar dados na api, retonor: ${error.message}`)
    }
}

export default fetchPokemons