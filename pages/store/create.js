import {
  Form,
  Container,
  Row, 
  ColMed12, 
  ColMed6, 
  ColMed4, 
  FormGroup,
  Option,
  Select, 
  Input, 
  Label, 
  ButtonPrimary} from '../../components/Global'

import Navbar from '../../components/Nav/Navbar'

export default function CreateProduct() {
 return (
   <>
     <Navbar/>
     <div>
       <Container>
         <Row>
          <ColMed12>
            <div>
              <div>
                <Row>
                  <ColMed6>
                    Add New Product
                  </ColMed6>
                  <ColMed6>
                    <ButtonPrimary>Products</ButtonPrimary>
                  </ColMed6>
                </Row>
              </div>
              <div>
                <Form>
                  <FormGroup>
                    <Label>Product Name</Label>
                    <ColMed4>
                      <Input type='text' placeholder='Product Name'/>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                    <Label>Product Slug</Label>
                    <ColMed4>
                      <Input type='text' placeholder='Product Slug'/>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                    <Label>Short Description</Label>
                    <ColMed4>
                      <Input type='text' placeholder='Short Description'/>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                    <Label>Description</Label>
                    <ColMed4>
                      <Input type='text' placeholder='Description'/>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                    <Label>Regular Price</Label>
                    <ColMed4>
                      <Input type='text' placeholder='Regular Price'/>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                    <Label>Sale Price</Label>
                    <ColMed4>
                      <Input type='text' placeholder='Sale Price'/>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                    <Label>Stock</Label>
                    <ColMed4>
                      <Select>
                        <Option>In Stock</Option>
                        <Option>Out of Stock</Option>
                      </Select>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                    <Label>Quantity</Label>
                    <ColMed4>
                      <Input type='text' placeholder='Quantity'/>
                    </ColMed4>
                  </FormGroup>

                  <FormGroup>
                  <Label>Category</Label>
                    <ColMed4>
                      <Select>
                        <Option>Electronics</Option>
                        <Option>Fashion</Option>
                      </Select>
                    </ColMed4>
                  </FormGroup>
                  <FormGroup>
                    <ColMed4>
                      <ButtonPrimary>Submit</ButtonPrimary>
                    </ColMed4>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </ColMed12>
         </Row>
       </Container>
     </div>
    </>
 );
}