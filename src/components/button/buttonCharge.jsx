
import styled from "styled-components"

const ButtomCharge = () => {
  
    return <ButtonChargeStyled>Carregar Mais</ButtonChargeStyled>
}

const ButtonChargeStyled = styled.button`
    width: 310px;
    height: 60px;
    background-color: red;
    color: white;
    border:2px solid red;
    font-size: 30px;
    text-align: center;
    padding: 10px 0px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        background-color:white;
        color:red;
        border:2px solid red;
    }
`

export default ButtomCharge
