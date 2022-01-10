import styled from "styled-components";


const Label = styled.label`
  
`;


const Input = styled.input`
&:hover + ${Label},
&:focus + ${Label}{
    transform: scale(1.02);
    background: black
}
&:focus + ${Label} {
    outline: 1px solid #000;
    outline: -webkit-focus-ring-color auto 2px;
  }
  position: absolute
  z-index: 10;
  top: 0;
  right: 0;
`;

const P = styled.p`
position: absolute;
bottom: -35px;
left: 10px;
font-size: 0.85rem;
color: #000;
`

const Div = styled.div`
    display: inline-block;
    position: relative;
    ${Label}{
        display: block;
        width: 200px;
        height: 50px;
        border-radius: 25px;
        background: linear-gradient(40deg, #ff6ec4, #7873f5);
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: transform .2s ease-out;
    }
`




export default function Image({ type, content, value, onChange }) {
  return (
    <Div>
        <Input type={type} value={value} onChange={onChange} />
        <Label>
            {content}
            <P></P>
        </Label>
    </Div>
  );
}

