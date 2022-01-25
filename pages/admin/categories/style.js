import styled from "styled-components"
import { FaTimesCircle, FaEdit } from "react-icons/fa";

export const Wrapper = styled.div`
margin-top: 45px;
color: inherit;
width:800px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
margin-right: auto;
margin-left: auto;
padding:10px 50px 20px;
height: 100%;
border-radius: 6px;
}
`

export const Text = styled.h3`
border:0;
border-bottom:1px solid #000;
padding-bottom: 5px;
`

export const Form = styled.form`
`


export const Input = styled.input`
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
width:100%;
padding: 1rem;
margin-bottom: 25px;
height: 3rem;
border-radius:5px;
border: none;
outline: none;
font-size:16px
&:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
}
`

export const Submit = styled.button`
background: blue;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 100%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`

export const CategoryWrap = styled.div`
margin: 1rem;
padding: 1.5rem;
color: inherit;
text-decoration: none;
border: 1px solid #eaeaea;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
max-width: 100%;
&:hover,
&:focus,
&:active {
  color: grey;
  border-color: grey;
}
`

export const CatContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const Action = styled.div`
display: flex;
align-items: center;
`

export const Edit = styled(FaEdit)`
padding-right: 5px;
color: cyan;
font-size: 18px;
`

export const Delete = styled(FaTimesCircle)`
color: crimson;
padding-left: 5px;
font-size: 18px;
`
export const CatAdd = styled.div`
display: flex;
justify-content: flex-end;
padding: 25px;
`