import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

function MainBoard({pins}) {
  
    return (
        <Wrapper>
            <Container>
               {pins.map((pin,index)=>{
                   let {urls} = pin;
                   return <Pin key={index} urls={urls}/>
               })}
            </Container>
        </Wrapper>
    )
}

export default MainBoard

const Wrapper = styled.div `
    background-color : white;
    display:flex;
    width:100%;
    height:100%;
    margin-top:15px;
    justify-content: center;
`

const Container = styled.div `
    background-color:white;
    column-count: 5;
    column-gap:5px; 
    margin: 0 auto;
    height:100%;
    max-width:1260px;
`