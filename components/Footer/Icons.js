import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';

const SocialContainer = styled.div`
    display: grid;
    margin: auto;
    gap: 20px;
    width: 100%;
`;
const SocialIcons  = styled.a`
    width: 25%; 
    padding: 10px;
    h4  { 
        font-size 24px;
        font-weight: 600; 
    }
    p   {
        font-size: 16px;
    }
`;

function Footer() {
    return(
        <SocialContainer> 
            <SocialIcons className='fab fa-facebook'>
                
            </SocialIcons>
        </SocialContainer>
    )
}

export default Footerimport styled from 'styled-components';
import React from 'react';
import Link from 'next/link';

const FooterMain = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 576px) {
        width: 95%; 
        flex-direction: column;
    }
`;
const FooterText  = styled.div`
    width: 25%; 
    padding: 10px;
    h4  { 
        font-size 24px;
        font-weight: 600; 
    }
    p   {
        font-size: 16px;
    }
`;

function Footer() {
    return(
        <FooterMain> 
            <FooterText>

            </FooterText>
        </FooterMain>
    )
}

export default Footer