

import SectionHeader from '@/components/Helper/SectionHeader'
import React from 'react'
import NewsCard from './NewsCard'

function News() {
  return (
    <div className='pt-16 pb-16'>
          <SectionHeader heading="Exciting Travel News For You"/>
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10
          items-center mt-20">
            <div className="">
                <NewsCard image="/images/n1.jpg" title="Top 10 place to visit in Australia" date="15 November 2025"/>
            </div>
            <div className="">
                <NewsCard image="/images/n2.jpg" title="Top 10 place to visit in Bangladesh" date="5 November 2025"/>
            </div>
            <div className="">
                <NewsCard image="/images/n3.jpg" title="TTop 10 place to visit in Pakistan" date="25 November 2025"/>
            </div>
            <div className="">
                <NewsCard image="/images/n4.jpg" title="Top 10 place to visit in New Zealand" date="30 November 2025"/>
            </div>
            

          </div>
    </div>
  )
}

export default News