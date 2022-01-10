import styled from "styled-components";

export default function Button({ children}) {
  return <StyledButton >{children}</StyledButton>;
}

const StyledButton = styled.button`
background-color: #6976d9;
color: white;
font-family: sans-serif;
font-size: 14px;
margin: 20px 0px;
border-radius: 5px

`;