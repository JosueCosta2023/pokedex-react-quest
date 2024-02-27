import styled from "styled-components"
import React, { useEffect, useState } from "react"
import {  getPokemonsTypesFilter } from "../getsApi"


const responsePokemonsTypes = await getPokemonsTypesFilter()


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        
        window.addEventListener('scroll', handScroll);
        return () => {
            window.removeEventListener('scroll', handScroll)
        }


    }, [])
    
    return(
        <NavContainer style={{top: isSticky ? '0px' : '-100px'}} >
            <Nav>
                <Selection>
                    <option value="">All Types</option>
                    {
                        responsePokemonsTypes.map((type, index) => (
                            <option value={type.name} key={index}>{type.name}</option>
                        ))
                    }
                </Selection>
                <ButtomSearch value={'50'} >Search More</ButtomSearch>
            </Nav>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    width:100%;
    height:100px;
    position:fixed;
    transition:top 0.3s;
    background-color:#260E0A;
`

const Nav = styled.div`
    width:1400px;
    max-width:100%;
    height:100%;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    `
    
    const Selection = styled.select`
    width:300px;
    height:40px;
    font-size:25px;
    padding-left:20px;
    border-radius:5px;
`

const ButtomSearch = styled.button`
    padding:5px 20px;
    font-size:25px;
    border-radius:10px;
    border:none;
    cursor:pointer;
`

export default Navbar