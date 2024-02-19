
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"
import axios from "axios"


const Card = () => {
    const [pokemons, setPokemon] = useState([]);
    useEffect(() => {
        const PokemonData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
                const results = response.data.results;

                const pokemonPromises = results.map( async (result)=>{
                    const pokemonResponse = await axios.get(result.url);
                    return{
                        name: pokemonResponse.data.name,
                        image: pokemonResponse.data.sprites.front_default
                    };
                })

                const pokemonData = await Promise.all(pokemonPromises)
                setPokemon(pokemonData)
                
            } catch (error) {
                console.error("Falha ao buscar pokemons: ", error)
            }
        }

        PokemonData()

    }, [])

    const theme = useContext(ThemeContext)

    const CARD_CONTENT = {
        width: "1400px",
        padding:'0',
        maxWidth: "100%",
        height:"100%",
        margin: " 0 auto",
        gap: "20px",
        display: "flex",
        flexWrap:"wrap",
        justifyContent: "center"
    }
    const CARD_STYLE = {
        backgroundColor: theme.theme.bodyCardBackgroundColor,
        border: "2px solid #fff",
        textAlign: "center",
        padding: "20px 30px",
        width: "250px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius:"15px"
    }
    const IMAGE_STYLE = {
        width:"100%",
        height:"350px"
    }
    const NAME_STYLE = {
        width:"100%",
        height:"60px",
        lineHeight:"60px",
        color:"black",
        fontSize:"30px",
        borderRadius:"5px",
        backgroundColor: theme.theme.bodyCardButtomBackgroundColor,
        color: theme.theme.bodyCardButtonFontcolor
    }

    return (
        <ul style={CARD_CONTENT}>
            {
                pokemons.map((pokemon, index) => (
                    <Link to='/profile' key={index}>
                        <li style={CARD_STYLE}>
                            <img src={pokemon.image} alt="Ilustração: imagem" style={IMAGE_STYLE} />
                            <h3 style={NAME_STYLE}>{pokemon.name}</h3>
                        </li>
                    </Link>
                ))

            }
        </ul>
    )
}



export default Card