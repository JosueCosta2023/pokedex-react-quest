
import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-context"

const Card = () => {
    const theme = useContext(ThemeContext)

    const CARD_CONTENT = {
        width: "1400px",
        padding:'0',
        maxWidth: "100%",
        height:"100%",
        margin: " 0 auto",
        gap: "20px",
        display: "flex",
        flexWrap:"wrap",
        justifyContent: "center"
    }

    const CARD_STYLE = {
        backgroundColor: theme.theme.bodyCardBackgroundColor,
        border: "2px solid #fff",
        textAlign: "center",
        padding: "20px 30px",
        width: "250px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius:"15px"
    }
    const IMAGE_STYLE = {
        width:"100%",
        height:"350px"
    }
    const NAME_STYLE = {
        width:"100%",
        height:"60px",
        lineHeight:"60px",
        color:"black",
        fontSize:"20px",
        borderRadius:"5px",
        backgroundColor: theme.theme.bodyCardButtomBackgroundColor,
        color: theme.theme.bodyCardButtonFontcolor
    }

    return (
        <ul style={CARD_CONTENT}>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            <Link to='/profile'>
                <li style={CARD_STYLE}>
                    <img src="/public/images/char.png" alt="Ilustração: imagem" style={IMAGE_STYLE} />
                    <h3 style={NAME_STYLE}>Nome Pokemon</h3>
                </li>
            </Link>
            
            
        </ul>
    )
}


const CardStyle = styled.div`


    h3{
        
    }
`

export default Card