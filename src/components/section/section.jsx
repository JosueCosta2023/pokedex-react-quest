import styled from "styled-components"
import Cards from "../cards/cards"

const Section = () => {
    return(
        <>
            <SectionS>
                <Cards/>
            </SectionS>
        </>
    )
}

const SectionS = styled.section`
    width:900px;
    max-width:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    gap:10px;
    padding-top:10px;
`

export default Section