import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../../contexts/theme-context"
import { getPokemonDetail } from "../getsApi"


const CardDetails = () => {
    const { id } = useParams()
    const [detail, setDetails] = useState({})
    const theme = useContext(ThemeContext)

    useEffect(() => {
        async function detailsPokemon() {
            const response = await getPokemonDetail(id)
            setDetails(response)
        }
        detailsPokemon()
    }, [])
// 
    return (
        <SectionStyled theme={theme.theme}>
            <CardDetailsStyle theme={theme.theme}>
                <CardImageSide>
                    <h5>Xp: {detail.base_experience}</h5>
                    <img src={detail.sprites?.other['official-artwork'].front_default} alt={detail.name} title={detail.name} />
                    <p>{detail.name}</p>
                    <div>
                        {
                            detail.types && detail.types.map((types, index) => {
                                return (
                                    <span key={index}>{types.type.name}</span>
                                )
                            })
                        }
                    </div>
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
                                        <span>{ability.ability.description_ability}</span>
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
    height:100vh;
    display:flex;
    justify-content:center;
    padding-bottom:50px;
   
`
const CardDetailsStyle = styled.div`
    width:850px;
    height:700px;
    max-height:100%;
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
        height:auto;
        transform:scale(1.5);
        background-position:bottom;
        transform:rotateY(180deg);
    }
    p{
        font-size:40px;
        text-transform:uppercase;
    }
    span{
        width:100px;
        height:25px;
        line-height:25px;
        text-align:center;
        display:inline-block;
        background-color:white;
        border-radius:10px;
        margin-left:5px;
        color:black;
        text-transform:capitalize;
    }
    h5{
        font-size:28px;
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
    justify-content:center;
    gap:10px;
    flex-wrap:wrap;
    li{
        width:135px;
        font-size:18px;
        height:30px;
        line-height:30px;
        text-transform:capitalize;
        background-color:white;
        color:black;
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
        background-color:white;
        color:black;
        border-radius:10px 10px 0px 0px ;
    }

    li span{
        background-color:#f0f0f0;
        color:black;
        display:block;
        width:90%;
        text-align:left;
        padding:20px;
    }


`
export default CardDetails
