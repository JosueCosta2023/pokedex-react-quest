
import { useContext, useEffect, useState } from "react"
import  {ThemeContext}  from "../../contexts/theme-context"
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { getPokemon } from "../getsApi"


const Card = () => {
    const [pokemons, setPokemon] = useState([]);
    useEffect(() => {
        const PokemonData = async () => {
            try {
                const results = await getPokemon()
                const pokemonPromises = results.map(async (result) => {
                    const pokemonResponse = await axios.get(result.url);
                    return {
                        id:pokemonResponse.data.id,
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
    
    return (
        <CardContent>
            {
                pokemons.map((pokemon, index) => (
                    <Link to={`/profile/${pokemon.id}`} key={index} >
                        <CardStyled theme={theme.theme}   >
                            <span></span>
                            <ImageStyle theme={theme.theme} src={pokemon.image} alt="Ilustração: imagem" title={pokemon.name}  />
                            <Number theme={theme.theme}>
                                N° {pokemon.id} 
                            </Number>
                            <Name theme={theme.theme}>
                               {pokemon.name} 
                            </Name>
                        </CardStyled>
                    </Link>
                ))
            }
        </CardContent>
    )
}


    const CardContent = styled.ul`
    width: 1400px;
    padding:0;
    max-width: 100%;
    height:100%;
    margin: 0 auto;
    gap:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    `
    const ImageStyle = styled.img`
    width: 100%;
    height: 350px;
    `
    const CardStyled = styled.li`
    background-color:${(theme) => theme.theme.bodyCardBackgroundColor};
    border: 2px solid #fff;
    text-align: center;
    padding: 20px 30px;
    width: 250px;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    `
    const Name = styled.h3`
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-transform:capitalize;
    font-size: 30px;
    border-radius: 5px;
    background-color: ${(theme) => theme.bodyCardButtomBackgroundColor};
    color: ${(theme) => theme.theme.bodyCardButtonFontcolor};
`

const Number = styled.span`
    font-size:18px;
    color: ${(theme) => theme.theme.bodyCardButtonFontcolor};
    margin-bottom:-20px;
`


export default Card