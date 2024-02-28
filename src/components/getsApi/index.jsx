import axios from "axios"

const base_url = "https://pokeapi.co/api/v2/"

export async function axiosPokemon(limit) {
    try {
        const response = await axios.get(`${base_url}pokemon/?limit=${limit}&offset=0`)
        return response.data.results   
    } catch (error) {
        console.error("Erro ao buscar dados na api: ", error)
    }
}

export async function getPokemon(id){
    try {
        const response = await axios.get(`${base_url}pokemon/${id}`)
        return response
    } catch (error) {
        console.log("Erro ao buscar detalhes do pokemon: ", error)
    }
}

export async function getPokemonDetail(id){
    try {
        const response = await getPokemon(id)
        const pokemonDetail = response.data
        
        for(const ability of pokemonDetail.abilities){
            const response = await axios.get(ability.ability.url)
            console.log(response)
            const abilityDescription = response.data.effect_entries.find(description => description.language.name === "en").effect
            ability.ability.description_ability = abilityDescription
        }

        return pokemonDetail

    } catch (error) {
        console.error("erro", error)
    }
}

export async function getPokemonsTypesFilter(){
    try { 
        const response = await axios.get(`${base_url}type/`)
        return response.data.results

    } catch (error) {
        console.error("Error ao buscar os pokemons no filtro de tipos: ", error)
    }
}
