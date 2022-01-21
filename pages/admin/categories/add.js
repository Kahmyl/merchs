import styled from "styled-components";
import { Container } from "../../../Components/Global";
import File from "../../../components/Form/File";



const AddProduct = () => {
    return ( 
    <Container>
        <Wrapper>
            <Text>ADD CATEGORY</Text>
            <Form>
                <Input placeholder="Name"/>
                <Submit>Submit</Submit>
            </Form>
        </Wrapper>
    </Container>
     );
}
 
export default AddProduct;


const Wrapper = styled.div`
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

const Text = styled.h3`
border:0;
border-bottom:1px solid #000;
padding-bottom: 5px;
`

const Form = styled.form`
`


const Input = styled.input`
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

const Textarea = styled.textarea`
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
width:100%;
margin-bottom: 25px;
padding: 1rem;;
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

const Select = styled.select`
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
width:100%;
margin-bottom: 25px;
padding: 1rem;;
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

const Submit = styled.button`
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

