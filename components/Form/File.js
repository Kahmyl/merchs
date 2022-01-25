import styled from "styled-components";


const File = ({type, onChange}) => {
    return ( 
        <Wrapper>
            <Click>Upload file</Click>
            <input 
            type={type}
            onChange={onChange}
            />
        </Wrapper>
     );
}
 
export default File;


const Wrapper = styled.div`
position: relative;
overflow: hidden;
display: inline-block;
margin-bottom: 25px;
input[type=file]{
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}
`

const Click = styled.button`
border: 2px solid gray;
color: gray;
background-color: white;
padding: 8px 20px;
border-radius: 8px;
font-size: 20px;
font-weight: bold;
`
