import axios from "axios"


const base_url = "https://pokeapi.co/api/v2/"

export async function getPokemon() {
    try {
        const response = await axios.get(base_url + "pokemon/?limit=12&offset=0")
        return response.data.results   
    } catch (error) {
        console.error("Erro ao buscar dados na api: ", error)
    }
}

export async function getPokemonsDetails(id){
    try {
        const response = await axios.get(base_url +`pokemon/${id}`)
        return response
    } catch (error) {
        console.log("Erro ao buscar detalhes do pokemon: ", error)
    }
}

export async function getPokemonsTypesFilter(){
    try { 
        const response = await axios.get(base_url + `type/`)
        return response.data.results

    } catch (error) {
        console.error("Error ao buscar os pokemons no filtro de tipos: ", error)
    }
}
