import { Link } from "react-router-dom"
import  ThemeToggleButton  from "../theme-toggle-button/theme-toggler-button"
import { useContext } from "react"
import { ThemeContext}  from "../../contexts/theme-context"
import styled from "styled-components"



const Header = () => {
    const theme = useContext(ThemeContext)

    return (
        <>
            <HeaderStyled theme={theme.theme} >
                <Link to="/">
                    <img src="/public/images/logo.png" alt="Logo principal de pokemons" style={{ width: "200px" }} />
                </Link>
                <ThemeToggleButton />
            </HeaderStyled>
        </>
    )
}

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:${(theme) => theme.theme.headerBackgroundColor};
`


export default Header