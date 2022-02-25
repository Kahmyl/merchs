import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'
import { Container } from '../Components/Global'
import useCart from '../hooks/useCart';



const Home = (props) => {
  const {numberOfItems, addToCart} = useCart()


  useEffect(() => {
    axios.get('http://localhost:5000/users')
  })

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
        <button onClick={()=>addToCart(123, 'add')}>Add to cart</button>
      </Container>
    </div>
  );
}



export default Home