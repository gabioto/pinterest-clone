import React from 'react'
import styled  from 'styled-components'
function Pin({urls}) {
    return (
        <Wrapper>
            <Container>
                <img src={urls.regular} alt="pin" />
            </Container>
        </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px; 
`

const Container = styled.div`
    
    align-items: center;
    box-sizing border-box;
    cursor:pointer;
    width:236px;

    img{
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit:cover;
    }

`