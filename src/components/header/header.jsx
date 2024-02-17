import { Link } from "react-router-dom"
import { ThemeToggleButton } from "../theme-toggle-button/theme-toggler-button"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

const Header = () => {
    const theme = useContext(ThemeContext)
    console.log(theme)
    return (
        <>
            <header style={{
                width:"100%",
                display:"flex",
                backgroundColor:theme.theme.background,
                justifyContent:"space-around",
                alignItems:"center"
            }}>
                <Link to="/">
                    <img src="/public/images/logo.png" alt="Logo principal de pokemons" style={{width:"200px"}} />
                </Link>
                <ThemeToggleButton/>
            </header>
        </>
    )
}


export default Header