import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'

export default function Home() {

  useEffect(() => {
    axios.get('http://localhost:5000/users')
  })

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>Welcome Home</div>
    </div>
  )
}
