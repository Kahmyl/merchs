import { useState } from "react";
import Link from "next/link";
import axios from "axios"
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Navbar from '../../components/Nav/Navbar'
import Router from 'next/router'
import {
    MainContainer, 
    WelcomeText, 
    InputContainer, 
    ButtonContainer, 
    HorizontalRule, 
    LoginWith, 
    ForgotPassword
} from "../../Components/MainComp"

const Login = () => {
    const [identity, setIdentity] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(identity, password)
        const data = {identity, password}
            axios.post('http://localhost:5000/register', data)
      }

    return ( 
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <MainContainer onSubmit={handleSubmit}>
            <WelcomeText>Sign In</WelcomeText>
            <InputContainer>
              <Input type="text" placeholder="Username or Email" value={identity} 
              onChange={(e) => setIdentity(e.target.value) } />
            </InputContainer>
            <InputContainer>
              <Input type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </InputContainer>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
            <ButtonContainer>
              <Button content="Sign In" />
            </ButtonContainer>
            <LoginWith><Link href="/User"><a>Register</a></Link></LoginWith>
            <HorizontalRule />
          </MainContainer>
        </div>
      </div>
     );
}
 
export default Login;