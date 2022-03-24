import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navbar from "../components/Nav/Navbar";
import { Container } from "../Components/Global";
import useCart from "../hooks/useCart";
import Product from "../components/Product.js";
import Hero from "../components/Hero/Hero.js"
import Category from "../components/Category.js"
import Footer from "../components/Footer/Footer"

const Home = (props) => {
  // const { numberOfItems } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/store/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.items);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Merchs</title>
      </Head>
      <Navbar />
      <div className="main-body">
        <Hero />

        <Container>
          {/* <h3>Cart ({numberOfItems})</h3> */}
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </Container>
        <Category />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
