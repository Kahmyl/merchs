import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import Subscribe from './Subscribe';
import Copyright from './Copyright';

const FooterMain = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 576px) {
        width: 95%; 
        flex-direction: column;
    }
`;
const FooterText  = styled.div`
    width: 35%; 
    padding: 10px;
    p   {
        font-size: 14px;
    }
`;
const Heading = styled.h3 `
    font-size 22px;
    font-weight: 600; 
    margin-bottom: 5px;
`
const FooterLinks = styled.div`
    width: 31%;
    padding: 10px;
    ul { 
        list-style: none;
        padding: 0px 5px;
    }
    li {padding: 5px 0;}
    a {
        font-size: 14px;}
`

function Footer() {
    return(
        <>
        <FooterMain> 
            <FooterText>
            <Heading>Merch</Heading>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat posuere consectetur. Vivamus rutrum vitae dui in ullamcorper. In venenatis orci nec augue imperdiet aliquam. Aliquam quis lorem eget neque varius bibendum id ut eros.</p>
            </FooterText>   
            <FooterLinks>
                <Heading>Links</Heading>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/store"><a>Store</a></Link></li>
                    {/* <li><Link href="/cart"><a>Cart ({numberOfItems})</a></Link></li> */}
                    <li><Link href="/contact"><a>Contact us</a></Link></li>
                    <li><Link href="/users/login"><a>Sign In</a></Link></li>
                    <li><Link href="/users"><a> Sign Up </a></Link></li>
                </ul>
            </FooterLinks>    
            <FooterLinks>
                <Subscribe/>
            </FooterLinks>    
        </FooterMain>
        <Copyright />
        </>
    )
}

export default Footer