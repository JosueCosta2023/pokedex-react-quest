
import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = () => {

    return (
       <Link to='/profile'>
            <CardStyle>
                <img src="/public/images/char.png" alt="Ilustração: imagem" />
                <h3>Nome Pokemon</h3>
            </CardStyle>
       </Link>
    )
}


const CardStyle = styled.div`
    background-color:#fff;
    border:5px solid #101217;
    text-align:center;
    padding: 20px 30px;
    width:250px;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:center;
    img{
        width:100%;
        height:350px;
    }

    h3{
        width:100%;
        height:60px;
        background-color:#CE9524;
        line-height:60px;
        border:3px solid #A16423;
        color:black;
        font-size:20px;
    }
`

export default Card