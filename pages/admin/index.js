import Navbar from '../../components/AdminNav/Navbar'
import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { Container } from '../../Components/Global'


export default function Home() {


  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Container>Irasshaimase Administrator-sama</Container>
    </div>
  )
}