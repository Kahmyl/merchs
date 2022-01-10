import styled from "styled-components";

const StyledInput = styled.input`
border: 1px solid #d9d9d9;
border-radius: 4px;
box-sizing: border-box;
padding: 10px;
width: 100%;
`;


export default function Input({ type, placeholder, value, onChange }) {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}