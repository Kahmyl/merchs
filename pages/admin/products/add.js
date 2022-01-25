import { Container } from "../../../Components/Global";
import { Formik } from 'formik'
import axios from "axios";
import Navbar from "../../../components/AdminNav/Navbar";
import {Wrapper, Text, Form, Input, Textarea, Select, Submit, File, Click, ImgSelect} from './style'

export const getServerSideProps = async () => {
  const request = await axios.get('http://localhost:5000/api/admin/category')
  const data = request.data
  

  return {
      props: {data: data}
  }
}


const AddProduct = ({data}) => {
    return (
    <div> 
      <Navbar>
      </Navbar>
      <Container>
          <Wrapper>
              <Text>ADD PRODUCT</Text>
              <Formik
                initialValues={{name: '', description: '', image: null, price: 0, category_id: ''}}
                onSubmit={values => {
                  const formData = new FormData()

                  formData.append("image", values.image)
                  formData.append("name", values.name)
                  formData.append("description", values.description)
                  formData.append("price", values.price)
                  formData.append("category_id", values.category_id)

                  axios.post('http://localhost:5000/api/admin/product/create', formData, {withCredentials:true})
                  .then(response => {
                      console.log(response.data.name)
                  })
                }}
              >
                {({handleChange, setFieldValue, handleSubmit, values, errors, touched, handleBlur}) => (
                  <Form onSubmit={handleSubmit}>
                    <Input 
                    type={"text"}
                    placeholder="Name"
                    onChange={handleChange('name')}
                    value={values.name}
                    onBlur={handleBlur('name')}
                    />
                    <Textarea 
                    placeholder="Description"
                    onChange={handleChange('description')}
                    value={values.description}
                    onBlur={handleBlur('description')}
                    ></Textarea>
                    <Select
                    value={values.category_id}
                    onChange={handleChange("category_id")}
                    onBlur={handleBlur('category_id')}
                     >
                      <option>-- select a category --</option>
                    {data && data.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    </Select>
                    <Input 
                    type={"text"}
                    placeholder="Price"
                    onChange={handleChange('price')}
                    value={values.price}
                    onBlur={handleBlur('price')}
                    />
                    <File>
                        <Click>Upload file</Click>
                        <input 
                        type="file"
                        onChange={(event) => {
                          setFieldValue('image', event.currentTarget.files[0]);
                        }} />
                       {values.image && <ImgSelect>{values.image.name}</ImgSelect>}
                    </File>
                    <Submit>Submit</Submit>
                  </Form>
                )}
              </Formik>
          </Wrapper>
      </Container>
    </div>
     );
}
 
export default AddProduct;






