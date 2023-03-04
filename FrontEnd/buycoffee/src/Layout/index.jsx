import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import HeroPage from '../Pages/HeroPage'
import { useState } from 'react'


const Layout = () => {

  const [address, setAddress] = useState("")

  return (
    <>
      <Header address={address}/>
      <HeroPage setAddress = {setAddress} address={address}/>
      <Footer/>
    </>
  )
}

export default Layout