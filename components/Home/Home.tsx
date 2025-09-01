import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChooseUs/WhyChoose'
import Review from './Reviws/Review'
import News from './News/News'

function Home() {
  return (
    <div className='overflow-hidden h-[10000px]'>
        <Hero/>
        <Destination/>
        <Hotel/>
        <WhyChoose/>
        <Review/>
        <News/>
    </div>
  )
}

export default Home