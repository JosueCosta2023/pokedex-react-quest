import { useState } from "react"

export const ButtomCharge = () => {

    const [ hover, setHover ] = useState(false)

    const BUTTOM_CARGE_STYLE = {
        width: "310px",
        height: "60px",
        backgroundColor: hover ? 'red' : 'white',
        color: hover ? 'white' : 'red',
        border:hover ? '2px solid red' : '2px solid red',
        fontSize: "30px",
        lineHeight: '60px',
        textAlign: "center",
        padding: "10px 0px",
        margin: "0 auto",
        cursor: "pointer",
        borderRadius: "10px",
    }
    return <buttom
        style={BUTTOM_CARGE_STYLE}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        Carregar Mais</buttom>
}

