import { useState } from "react";
import Link from "next/link";
import axios from "axios"
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Navbar from '../../components/AdminNav/Navbar'
import Router from 'next/router'
import { Formik } from 'formik';
import loginSchema from "../../Schema/loginSchema";
import { ErrorText } from "../../Components/Global";
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
    
    const [isdisabled, setIsDisabled] = useState(false)

    return ( 
      <div>
        <div>
          <Navbar />
        </div>
        <div>
        <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginSchema}
        onSubmit={(values) =>{
          console.log(values)
        }}
        >
          {({handleChange, handleSubmit, values, errors, touched, handleBlur}) => (
            <MainContainer onSubmit={handleSubmit}>
              <WelcomeText>Sign In</WelcomeText>
              <InputContainer>
                <ErrorText>{touched.email && errors.email}</ErrorText>
                <Input 
                  type="text" 
                  placeholder="Username or Email" 
                  onChange={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')} />
              </InputContainer>
              <InputContainer>
                <ErrorText>{touched.password && errors.password}</ErrorText>
                <Input 
                  type="password" 
                  placeholder="Password" 
                  onChange={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}/>
              </InputContainer>
              <ForgotPassword>Forgot Password ?</ForgotPassword>
              <ButtonContainer>
                <Button type="submit" content="Sign In" disabled={isdisabled} />
              </ButtonContainer>
              <LoginWith><Link href="/User"><a>Create an accout</a></Link></LoginWith>
              <HorizontalRule />
            </MainContainer>
          )}
        </Formik>
        </div>
      </div>
     );
}
 
export default Login;