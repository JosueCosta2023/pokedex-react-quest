import Card from "../card/card"
import { useContext } from "react"
import  {ThemeContext}  from "../../contexts/theme-context"
import styled from "styled-components"

const Cards = () => {
    const theme = useContext(ThemeContext)


    return (
        <>
            <SectionStyled theme={theme.theme}>
                <Card />

            </SectionStyled>
        </>
    )
}

const SectionStyled = styled.section`
    width: 100%;
    padding:50px 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:40px;
    background-color:${(theme) => theme.theme.bodyContainerBackgroundColor}
`

export default Cards