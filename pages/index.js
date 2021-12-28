import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>Welcome Home</div>
    </div>
  )
}
