import Navbar from "../../../components/AdminNav/Navbar";
import { ButtonPrimary, Container } from "../../../Components/Global";
import { CatContent, CategoryWrap, Action, Edit, Delete, CatAdd } from "./style";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
    const request = await axios.get('http://localhost:5000/api/admin/category')
    const data = request.data
    

    return {
        props: {data: data}
    }
}

const Category = ({data}) => {
    return ( 
        <div>
          <Navbar/>
          <Container>
              <CatAdd>
                <Link href={"/admin/categories/add"}><a><ButtonPrimary>Add Category</ButtonPrimary></a></Link>
              </CatAdd>
              {data && data.map(item => (
                <CategoryWrap key={item.id}>
                  <CatContent>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.slug}</p>
                    <Action>
                        <Edit/>
                        <Delete/>
                    </Action>
                  </CatContent>
                </CategoryWrap>
              ))}
              
          </Container>
        </div>
    );
}
 
export default Category;