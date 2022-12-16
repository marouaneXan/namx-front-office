import React from 'react'
import Carousel from '../../Components/Home/Carousel'
import Hero from '../../Components/Home/Hero'
import NamxDescription from '../../Components/Home/NamxDescription'
import NamxSection from '../../Components/Home/NamxSection'

const Home = () => {
  return (
    <>
        <Hero/>
        <NamxSection/>
        <NamxDescription/>
        <Carousel/>
    </>
  )
}

export default Home