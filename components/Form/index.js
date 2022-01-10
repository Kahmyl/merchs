import styled from "styled-components";

const StyledForm = styled.form`
  background: white;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 50px;
`;


export default function Form({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit} >{children}</StyledForm>;
}