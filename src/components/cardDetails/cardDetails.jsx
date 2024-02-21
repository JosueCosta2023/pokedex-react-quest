import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const CardDetails = () => {

    const theme = useContext(ThemeContext)

    return (
        <SectionStyled theme={theme.theme}>
            <CardDetailsStyle theme={theme.theme}>
                <CardImageSide>
                    <div />
                    <p>Jacerex</p>
                    <span>Agua</span>
                </CardImageSide>

                <CardDetailsSide >
                       <DetailsMoves>
                            <h2>Movimentos</h2>
                            <MovesList>
                                <li>Movimento 1</li>
                                <li>Movimento 2</li>
                                <li>Movimento 3</li>
                                <li>Movimento 3</li>
                                <li>Movimento 3</li>
                                <li>Movimento 3</li>
                            </MovesList>
                       </DetailsMoves>
                       <DetailsAbility>
                            <h2>Habilidades</h2>
                            <AbilityList>
                                <li>
                                    <p>Habilidade 1</p>
                                    <span>Descrição completa da habilidade</span>
                                </li>

                                <li>
                                    <p>Habilidade 2</p>
                                    <span>Descrição completa da habilidade</span>
                                </li>
                                <li>
                                    <p>Habilidade 3</p>
                                    <span>Descrição completa da habilidade</span>
                                </li>
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
`

const CardImageSide = styled.div`
    width:40%;
    text-align:center;
    font-size:25px;
    font-weight:bold;
    div{
        width:100%;
        height:60%;
        background-image:url('/public/images/char.png');
        background-size:50%;
        background-repeat:no-repeat;
        background-position:bottom;
        transform:rotateY(180deg);
    }
    p{
        font-size:40px;
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

    li:nhtchild(3){
        padding-bottom:0px;
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

