import { Formik } from 'formik'
import { Container } from "../../../Components/Global";
import axios from "axios";
import Navbar from "../../../components/AdminNav/Navbar";
import {Wrapper, Text, Form, Input, Submit} from './style'
import Router from 'next/router';



const AddCategory = () => {

    return ( 
    <div>
        <Navbar/>
        <Container>
            <Wrapper>
                <Text>ADD CATEGORY</Text>
                <Formik
                  initialValues={{name: ''}}
                  onSubmit={values => {
                    console.log(values)
                    axios.post('http://localhost:5000/api/admin/category/create', values)
                    .then(response => {
                        console.log(response.data)
                        Router.replace('/admin/categories')
                    })
                  }}
                >
                 {({handleChange, handleSubmit, values, errors, touched, handleBlur}) => (
                  <Form onSubmit={handleSubmit}>
                      <Input 
                      type = "text"
                      placeholder="Name"
                      onChange={handleChange('name')}
                      value={values.name}
                      onBlur={handleBlur('name')}
                      />
                      <Submit>Submit</Submit>
                  </Form>
                 )}
                </Formik>
            </Wrapper>
        </Container>
    </div>
     );
}
 
export default AddCategory;



