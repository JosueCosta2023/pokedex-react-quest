import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <Link to="/">
                    <img src="/public/images/logo.png" alt="Logo principal de pokemons" />
                </Link>
                <button>☀️Dia</button>
            </HeaderStyle>
        </>
    )
}


const HeaderStyle = styled.header`
    width:100%;
    background-color:#101217;
    color:white;
    display:flex;
    justify-content:space-around;
    align-items:center;
    img{
        width:200px;
    }

    button{
        font-size:14px;
        padding: 0 20px;
        cursor:pointer;
        text-transform:uppercase;
        font-weight:bold;
        color:#101217;
    }
`

export default Header