import { useState } from "react";
import Link from "next/link";
import axios from "axios"
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Navbar from '../../components/AdminNav/Navbar'
import Router from 'next/router'
import { Formik } from 'formik';
import registerSchema from "../../Schema/loginSchema";
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

const Register = () => {
    
    const [isdisabled, setIsDisabled] = useState(false)

    return ( 
      <div>
        <div>
          <Navbar />
        </div>
        <div>
        <Formik
        initialValues={{name: '', email: '', password: ''}}
        validationSchema={registerSchema}
        onSubmit={(values) =>{
          console.log(values)
        }}
        >
          {({handleChange, handleSubmit, values, errors, touched, handleBlur}) => (
            <MainContainer onSubmit={handleSubmit}>
              <WelcomeText>Sign Up</WelcomeText>
              <InputContainer>
                <ErrorText>{touched.name && errors.name}</ErrorText>
                <Input 
                  type="text" 
                  placeholder="Name" 
                  onChange={handleChange('name')}
                  value={values.name}
                  onBlur={handleBlur('name')} />
              </InputContainer>
              <InputContainer>
                <ErrorText>{touched.email && errors.email}</ErrorText>
                <Input 
                  type="text" 
                  placeholder="Email" 
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
              <LoginWith><Link href="/User"><a>Login</a></Link></LoginWith>
              <HorizontalRule />
            </MainContainer>
          )}
        </Formik>
        </div>
      </div>
     );
}
 
export default Register;