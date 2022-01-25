import Navbar from "../../../components/AdminNav/Navbar";
import { ButtonPrimary, Container } from "../../../Components/Global";
import { ProContent, ProductWrap, Action, Edit, Delete, ProAdd } from "./style";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
    const request = await axios.get('http://localhost:5000/api/admin/product')
    const data = request.data
    

    return {
        props: {data: data}
    }
}

const Product = ({data}) => {
    return ( 
        <div>
          <Navbar/>
          <Container>
              <ProAdd>
                <Link href={"/admin/products/add"}><a><ButtonPrimary>Add Product</ButtonPrimary></a></Link>
              </ProAdd>
              {data && data.map(item => (
                <ProductWrap key={item.id}>
                  <ProContent>
                    <p>{item.id}</p>
                    <img width={150} src={item.image}/>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    
                    <Action>
                        <Edit/>
                        <Delete/>
                    </Action>
                  </ProContent>
                </ProductWrap>
              ))}
              
          </Container>
        </div>
    );
}
 
export default Product;