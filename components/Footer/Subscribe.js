import styled from 'styled-components';
import React from 'react';
import Heading from './Footer';

const Sub = styled.div`
    border: 1px solid lightgrey;    
    padding: 8px;
    input{
        margin: 5px 0;
        border: 1px solid lightgrey;
        outline: none;
        padding: 2px;
    }
    input:focus {
        outline: none;
        border: ipx solid lightblue;
    }
    button {
        width: 100%;
        padding: 10px 0;
        margin: 10px 0;
        background: #2222;
        color: #FFFF;
    }
`

function Subscribe() {
    return(
        <Sub>
            <Heading>Subscribe to our Newsletter</Heading>
            <form>
                <input type="text" placeholder='Your Name'></input>
                <input type="email" placeholder="Your Email Address"></input>
                <button type="submit">Subscribe</button>
            </form>
        </Sub>
    )
}

export default Subscribe