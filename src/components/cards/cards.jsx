import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"

const Cards = () => {

    const [pokemons, setPokemons] = useState({})

    const getPokemons = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                const pokemon = response.data
                setPokemons((prevPokemon) => ({ ...prevPokemon, [id]: pokemon }))
            })
    }

    const arrayPokemons = () => Array(12)
        .fill()
        .map((pokemon, index) => getPokemons(index + 1))

    useEffect(() => {
        arrayPokemons()
    }, [])


    console.log(pokemons)

    return (
        <>
            {
                Object.values(pokemons)
                    .map(item =>
                        <Card>
                            <img src={item.sprites.front_default} alt={item.name} title={item.name}/>
                            <h2>{item.name}</h2>
                        </Card>
                    )
            }

        </>
    )
}



const Card = styled.section`
    background-color:#fff;
    border:5px solid #101217;
    text-align:center;
    width:250px;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:center;
    &:hover{
        background-color:#101217;
        color:#fff;
        border:5px solid #fff;
    }

    img{
        width:80%;
        margin:0 auto;
    }
`

export default Cards