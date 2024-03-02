import { useContext ,useEffect, useState } from "react"
import { axiosPokemon, getPokemonsTypesFilter } from "../getsApi"
import axios from "axios"
import styled from "styled-components"
import  {ThemeContext}  from "../../contexts/theme-context"
import { Link } from "react-router-dom"


function Card(){
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState('')

    // Buscar pokemons geral
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const data = await axiosPokemon()
                setPokemons(data)
            } catch (error) {
                console.error("Erro ao buscar os pokemons:", error)
            }
        }

        fetchPokemons()

    }, [])

    // Buscar os tipos de pokemons
    useEffect(() => {
        const fetchPokemonsTypes = async () => {
            try {
                const response = await getPokemonsTypesFilter()
                setTypes(response)
            } catch (error) {
                console.error("Erro ao buscar os tipo de pokemons:", error)
            }
        }
        fetchPokemonsTypes()
    }, [])

    // Função seleção de pokemons input e bottom
    // Mapeamento do input

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value)
    }

    // Buscando os pokemons por tipo, atraves do input selected
    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`)
            const data = response.data.pokemon.slice(0, 10)
            setPokemons(data)
        } catch (error) {
            console.error("Erro ao buscar os pokemons por tipo selecionado:", error)
        }
    }
    return(
        <SectionCards>
            <NavBar
                types={types}
                selectedType={selectedType}
                onTypeChange={handleTypeChange}
                onSearch={handleSearch}
            />
            <CardContent>
                {
                    pokemons.map((pokemon, index) => (
                        <Pokemons key={index} pokemon={pokemon}/>
                    ))
                }
            </CardContent>
        </SectionCards>
    )
}

const SectionCards = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
`
const CardContent = styled.div`
    width:1900px;
    max-width:100%;
    height:auto;
    max-height:auto;
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    justify-content:center;
    align-items:center;
    margin:0 auto;
`

// COMPONENTE POKEMONS EXTRAIR
function Pokemons({pokemon}){
    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(()=>{
        const fetchPokemonsInfo = async () => {
            try {
                const response = await axios.get(pokemon.pokemon.url) 
                setPokemonInfo(response.data)

            } catch (error) {
                console.error("Erro ao buscar informações do pokemon:", error)
            }
        };
        
        fetchPokemonsInfo()

    }, [pokemon.url])
    
    const theme = useContext(ThemeContext)

    return(
        <div>
            {
                pokemonInfo && (
                    <Link to={`/profile/${pokemonInfo.id}`}>
                        <CardStyled theme={theme.theme}>
                            <ImageStyle theme={theme.theme} src={pokemonInfo.sprites.other['official-artwork'].front_default} alt="" />  
                            <Number theme={theme.theme}>{pokemonInfo.id}</Number>
                            <Name theme={theme.theme}>{pokemonInfo.name}</Name>
                        </CardStyled>
                    </Link>
                )
            }
        </div>
    )
}

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

// COMPONENTE NAVBAR, EXTRAIR
function NavBar({types, selectedType, onTypeChange, onSearch}){
    return(
        <NavBarStyle>
            <select value={selectedType} onChange={onTypeChange}>
                <option value={'types'}>All Types</option>
                {types.map((type, index) => (
                    <option  key={index} value={type.name}>{type.name}</option>
                ))
                }
            </select>
            <button onClick={onSearch}>Search</button>
        </NavBarStyle>
    )
}

const NavBarStyle = styled.nav`
    width:100%;
    height:100px;
    background-color:#260E0A;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
    margin-bottom:20px;
    select{
        font-size:25px;
        width:250px;
        border-radius:5px;
        padding:5px;
    }
    button{
        font-size:25px;
        width:150px;
        border-radius:5px;
        padding:5px;
        cursor:pointernpm;
    }
`



export default Card