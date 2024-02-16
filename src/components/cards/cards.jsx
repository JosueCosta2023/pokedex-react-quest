import styled from "styled-components"
import fetchPokemons from "../../utils/functions/fetch"

const data = await fetchPokemons()

const Cards = () => {
    return (
        <>  {data.results.map((pokemon) => (
                <Card key={"key"}>
                    <img src="/public/images/char.png" alt="pokemon1" />
                    <h2>{pokemon.name}</h2>
                </Card>
        ))}
        </> 
    )
}



const Card = styled.section`
    background-color:#fff;
    border:5px solid #101217;
    text-align:center;
    width:150px;
    height:200px;
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
        width:50%;
        margin:0 auto;
    }
`

export default Cards