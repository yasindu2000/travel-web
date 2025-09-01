import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChooseUs/WhyChoose'
import Review from './Reviws/Review'
import News from './News/News'
import NewsLetter from './NewsLetter.tsx/NewsLetter'

function Home() {
  return (
    <div className='overflow-hidden '>
        <Hero/>
        <Destination/>
        <Hotel/>
        <WhyChoose/>
        <Review/>
        <News/>
        <NewsLetter/>
    </div>
  )
}

export default Home