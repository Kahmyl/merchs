import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'
import { Container } from '../Components/Global'
import { addToCart } from '../redux';
import { connect } from 'react-redux';

const Home = (props) => {

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
        <h3>Cart ({Object.keys(props.cart).length})</h3>
        <button onClick={() => props.addToCart(123)}>Add To Cart</button>
        <button onClick={() => props.addToCart(192)}>Add To Cart</button>
      </Container>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: productId => dispatch(addToCart(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)