import styled from "styled-components"

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <h1>
                    "Seu logo Aqui"
                </h1>
            </HeaderStyle>
        </>
    )
}


const HeaderStyle = styled.header`
    width:100%;
    height:200px;
    background-color:black;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default Header