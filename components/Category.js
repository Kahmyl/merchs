import React from "react";
import styled from "styled-components";

const CategoryDiv = styled.div`
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    display: inline-block;
    padding: 10px;
    margin: auto;
    background: white;
    
    img{ 
        height: 240px;
        width: auto;
        object-fit: contain;
    }
    h4 {
        font-weight: 650;
        font-family: 'open sans', Helvetica, sans-serif;
        text-transform: capitalize;
    }
    Button {
        background: light-grey;
        border: none;
        color: black;
        padding: 10px 20px;
        display: block;
        margin: auto;
        font-weight: 500;
    }
    Button:hover, Button:active {
        color: white;
        background: grey;
    }
`

function Category() {
    return( 
        <>
            <CategoryDiv>
                <img src="" alt=""></img>
                <h4>Category Name</h4>
                <button>Browse</button>
            </CategoryDiv>
        </>
    )
}

export default Category