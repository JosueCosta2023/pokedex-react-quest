import styled from "styled-components"
import Card from "../card/card"

const Cards = () => {
    return(
        <>
            <CardContentStyle>
                <Card/>
            </CardContentStyle>
        </>
    )
}

const CardContentStyle = styled.section`
    width:1400px;
    max-width:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    gap:10px;
    padding-top:10px;
    background-color:red;
`

export default Cards