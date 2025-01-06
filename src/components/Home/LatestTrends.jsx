import React from 'react'
import Container from '../common/Container'
import { LatestTrendsData } from '../../lib/data/apiData'
import MyCarousel from '../common/MyCarousel'
import { Ratings } from './Ratings'
import { Button } from '@nextui-org/react'
import ComponentTitle from '../common/ComponentTitle'

const LatestTrends = () => {
  return (
    <Container className='lg:px-[52px] md:px-8 sm:px-4 md:mb-24 mb-10'>
      <ComponentTitle children="The latest trends"/>
     <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[33px] gap-5">
        {LatestTrendsData.map((item) => (
          <div key={item.id} className=" mx-auto bg-bgS rounded-xl">
            <MyCarousel images={item.images} />
            <div className="pt-[13px] pl-[14px] overflow-hidden pb-5 ">
              <h2 className="text-lg sm:text-xl font-semibold font-roboto text-txtP">
                {item.title}
              </h2>
              <p className="text-txtS font-roboto text-[14px]">
                {item.des}
              </p>
              <div className="pt-[27px]">
                <Ratings
                  currentRating={item.ratting}
                  reviews={item.reviews}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-[52px] text-center'>
        <h3 className='font-lexend text-md sm:text-[22px] pb-5'>Discover more cool restaurants</h3>
        <Button className='rounded-full bg-bgP text-white'>Show more</Button>
      </div>
    </Container>
  )
}

export default LatestTrends
