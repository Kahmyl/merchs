import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'
import { Container } from '../Components/Global'
import { addToCart } from '../redux';
import { connect } from 'react-redux';
import { updateCookieItem, getCartItemsAndTotal, getCart } from '../utils/cart';
import { useCookies } from "react-cookie";


const Home = (props) => {
  const [cookies, setCookies] = useCookies(['cart'])
  

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
        <h3>Cart ({props.number_of_items})</h3>
        <button onClick={() => updateCookieItem(123, "add")}>
          Add To Cart
        </button>
        <button onClick={() => updateCookieItem(193, "add")}>
          Add To Cart
        </button>
      </Container>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    cart: state.cart,
    number_of_items: state.number_of_items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: productId => dispatch(addToCart(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)