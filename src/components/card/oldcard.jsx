
import { useContext, useEffect, useState } from "react"
import  {ThemeContext}  from "../../contexts/theme-context"
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { axiosPokemon } from "../getsApi"
import {  getPokemonsTypesFilter } from "../getsApi"

const responsePokemonsTypes = await getPokemonsTypesFilter()

const Card = () => {
    const [pokemons, setPokemon] = useState([]);
    const [isSticky, setIsSticky] = useState(false)
    const [limit, setLimit] = useState(5)
    
    useEffect(() => {
        const handScroll = () => {
            if(window.scrollY > 0){
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handScroll);
        
        const PokemonData = async () => {
            try {
                const results = await axiosPokemon(limit)
                const pokemonPromises = results.map(async (result) => {
                    const pokemonResponse = await axios.get(result.url);
                    return {
                        id:pokemonResponse.data.id,
                        name: pokemonResponse.data.name,
                        image: pokemonResponse.data.sprites.other['official-artwork'].front_default
                    };
                })
                const pokemonData = await Promise.all(pokemonPromises)
                setPokemon(pokemonData)
                
            } catch (error) {
                console.error("Falha ao buscar pokemons: ", error)
            }
        }

        PokemonData()

        return () => {
            window.removeEventListener('scroll', handScroll)
        }

    }, [limit])

    
    const theme = useContext(ThemeContext)

    const loadMorePokemons = () => {
        setLimit(prevLimit => prevLimit + 1)
    }
    
    return (
        <CardContent>
            <NavContainer style={{top: isSticky ? '0px' : '120px'}} >
                <Nav>
                    <Selection>
                        <option value="">All Types</option>
                        {
                            responsePokemonsTypes.map((type, index) => (
                                <option value={type.name} key={index} onChange={(e) => setPokemonType(e.target.value)}> {type.name}</option>
                            ))
                        }
                    </Selection>
                    <ButtomSearch onClick={loadMorePokemons}>Search More</ButtomSearch>
                </Nav>
            </NavContainer>
            

            {
                pokemons.map((pokemon, index) => (
                    <Link to={`/profile/${pokemon.id}`} key={index} >
                        <CardStyled theme={theme.theme}   >
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
width: 1900px;
padding:0;
max-width: 100%;
height:auto;
margin: 0 auto;
gap:20px;
display:flex;
    flex-wrap:wrap;
    justify-content: center;
    margin-top:50px;
   
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

const NavContainer = styled.nav`
    width:100%;
    height:100px;
    position:fixed;
    transition:top 0.3s;
    background-color:#260E0A;
`

const Nav = styled.div`
    width:1400px;
    max-width:100%;
    height:100%;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    `
    
    const Selection = styled.select`
    width:300px;
    height:40px;
    font-size:25px;
    padding-left:20px;
    border-radius:5px;
`

const ButtomSearch = styled.button`
    padding:5px 20px;
    font-size:25px;
    border-radius:10px;
    border:none;
    cursor:pointer;
`

export default Card