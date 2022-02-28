import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Nav/Navbar";
import { Container } from "../Components/Global";
import useCart from "../hooks/useCart";

const Home = (props) => {
  const { numberOfItems, addToCart } = useCart();
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/store/products")
    .then(response => {
      console.log(response.data)
      setProducts(response.data.items)
      console.log(products)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <div>
      <Head>
        <title>Merchs</title>
      </Head>
      
      <div>
        <Navbar />
      </div>
      <Container>
        Welcome Home
        <h3>Cart ({numberOfItems})</h3>
        {products.map(product => {
          return (<div key={product.id}>
            <img src={product.image} alt="{product.id}"/>
            <h3>{product.name}</h3>
            <button onClick={() => addToCart(product.id, 'add', product)}>Add to Cart</button>
          </div>)
        })}
      </Container>
    </div>
  );
};

export default Home;
