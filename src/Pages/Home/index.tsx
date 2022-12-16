import React from 'react'
import Carousel from '../../Components/Home/Carousel'
import Hero from '../../Components/Home/Hero'
import NamxDescription from '../../Components/Home/NamxDescription'
import NamxRecharge from '../../Components/Home/NamxRecharge'
import NamxSection from '../../Components/Home/NamxSection'
import ResevationSection from '../../Components/Home/ReservationSection'

const Home = () => {
  return (
    <>
        <Hero/>
        <NamxSection/>
        <NamxDescription/>
        <Carousel/>
        <NamxRecharge/>
        <ResevationSection/>
    </>
  )
}

export default Home