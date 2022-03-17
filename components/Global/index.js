import styled from "styled-components";

export const Header = styled.header`
display: block;
`
export const Container = styled.div`
display: block;
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
// @media (min-width: 576px) {
//     max-width: 540px;
// }
// @media (min-width: 768px) {
//     max-width: 720px;
// }
// @media (min-width: 992px) {
//     max-width: 960px;
// }
// @media (min-width: 1200px) {
//     max-width: 1140px;
// }
`
export const Row = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
`
export const Column = styled.div`
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
`

export const ColMed4 = styled.div`
flex: 0 0 33.3333333333%;
max-width: 33.3333333333%;
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
`

export const ColMed6 = styled.div`
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
flex: 0 0 50%;
max-width: 50%;
`

export const ColMed12 = styled.div`
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
flex: 0 0 100%;
max-width: 100%;
`


export const FormGroup = styled.div`
margin-bottom: 1rem;
`

export const Form = styled.form`
`



export const Input = styled.input`
display: block;
width: 100%;
height: calc(1.6em + 0.75rem + 2px);
padding: 0.375rem 0.75rem;
font-size: 0.9rem;
font-weight: 400;
line-height: 1.6;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: 0.25rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const Select = styled.select`
display: block;
width: 100%;
height: calc(1.6em + 0.75rem + 2px);
padding: 0.375rem 0.75rem;
font-size: 0.9rem;
font-weight: 400;
line-height: 1.6;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: 0.25rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export const Option = styled.option`
`

export const Label = styled.label`
flex: 0 0 33.3333333333%;
max-width: 33.3333333333%;
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
`

export const ButtonPrimary = styled.label`
display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
-webkit-user-select: none;
   -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 0.9rem;
line-height: 1.6;
border-radius: 0.25rem;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
color: #fff;
background-color: #3490dc;
border-color: #3490dc;
&:hover{
    color: #fff;
    background-color: #227dc7;
    border-color: #2176bd;
}
&:focus{
    color: #fff;
    background-color: #227dc7;
    border-color: #2176bd;
    box-shadow: 0 0 0 0.2rem rgba(82, 161, 225, 0.5);
}
`

export const ErrorText = styled.p`
color: crimson;
text-align: center;
`