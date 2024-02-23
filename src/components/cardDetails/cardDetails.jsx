import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-context"
import axios from "axios"

async function getPokemonsDetails(id){
    try {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        return response
    } catch (error) {
        console.error("retorno da api: ", error)
    }
}

const CardDetails = () => {
    const {id} = useParams()
    const [ detail, setDetails] = useState({})
    const theme = useContext(ThemeContext)

    useEffect(() => {
        async function detailsPokemon(){
            const detail = await getPokemonsDetails(id)
           console.log(detail.data.abilities)
            setDetails(detail.data)
        }
        detailsPokemon()
    }, [])

    return (
        <SectionStyled theme={theme.theme}>
            <CardDetailsStyle theme={theme.theme}>
                <CardImageSide>
                    <img src={detail.sprites?.front_default} alt={detail.name} title={detail.name}  />
                    <p>{detail.name}</p>
                            {
                            detail.types && detail.types.map((types, index) => {
                                return(
                                    <span key={index}>{types.type.name}</span>
                                )
                            })
                            }
                </CardImageSide>

                <CardDetailsSide >
                       <DetailsMoves>
                            <h2>Movimentos</h2>
                            <MovesList>
                               {
                                detail.moves && detail.moves.slice(0, 6).map((movimentos, index) => (
                                    <li key={index}>{movimentos.move.name}</li>
                                ))
                               }
                            </MovesList>
                       </DetailsMoves>
                       <DetailsAbility>
                            <h2>Habilidades</h2>
                            <AbilityList>
                                {
                                    detail.abilities && detail.abilities.map((ability, index) => (
                                <li key={index}>
                                    <p>{ability.ability.name}</p>
                                    <span>Descrição completa da habilidade</span>
                                </li>

                                    ))
                                }
                            </AbilityList>
                       </DetailsAbility>
                </CardDetailsSide>
            </CardDetailsStyle>
        </SectionStyled>
    )
}

const SectionStyled = styled.section`
    background-color:${(theme) => theme.theme.bodyContainerBackgroundColor};
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    padding-bottom:50px;
   
`

const CardDetailsStyle = styled.div`
    width:850px;
    background-color:${(theme) => theme.theme.bodyCardDetails};
    margin-top:50px;
    border-radius:10px;
    -webkit-box-shadow: 7px 3px 14px 0px rgba(0,0,0,0.46);
    -moz-box-shadow: 7px 3px 14px 0px rgba(0,0,0,0.46);
    box-shadow: 7px 3px 14px 0px rgba(0,0,0,0.46);
    display:flex;
    justify-content:space-between;
    color:${(theme) => theme.theme.bodyCardDetailsFontTitles};
`

const CardImageSide = styled.div`
    width:350px;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
        width:250px;
        height:250px;
        
        background-position:bottom;
        transform:rotateY(180deg);
    }
    p{
        font-size:40px;
        text-transform:uppercase;
    }
    span{
        padding:5px 10px;
        background-color:white;
        border-radius:10px;
        margin-bottom:2px;
    }
`
const CardDetailsSide = styled.div`
    width:70%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:10px;
`

const DetailsMoves = styled.div`
    width:80%;
    text-align:center;
`

const MovesList = styled.ul`
    display:flex;
    padding:0;
    justify-content:space-between;
    gap:10px;
    flex-wrap:wrap;
    li{
        padding:10px 20px;
        background-color:gray;
        border-radius:5px;
    }
`

const DetailsAbility = styled.div`
    width:90%;
    height:400px;
    text-align:center;
`

const AbilityList = styled.ul`
    display:flex;
    padding:0;
    margin-bottom:0px;
    justify-content:center;
    align-items:center;
    list-style:none;
    flex-direction:column;
    li{
        border-radius:5px;
        padding-bottom:10px;
        width:90%;
    }

    li p{
        font-size:20px;
        margin-bottom:5px;
        margin-top:4px;
        padding:10px;
        border-bottom:1px solid black;
        text-align:left;
        background-color:#808080;
        border-radius:10px 10px 0px 0px ;
    }

    li span{
        background-color:#f0f0f0;
        display:block;
        width:100%;
        line-height:30px;
    }


`
export default CardDetails
