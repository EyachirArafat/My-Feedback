import React from 'react'
import Container from '../common/Container'
import { Button } from '@nextui-org/react'

const ExploreBusiness = () => {
  return (
    <div className='bg-[#F2F2F2] '>
      <Container className='px-4 sm:px-10 md:px-16 lg:px-[100px] xl:px-[182px] py-[26px] md:mb-24 mb-10'>
        <div className='grid sm:grid-cols-2 grid-cols-1 justify-center items-center sm:flex-row flex-col-reverse'>
          <div className=''>
            <div className='flex flex-col gap-8'>
              <h1 className='font-lexend lg:font-extrabold md:font-bold font-semibold md:text-[26px] sm:text-lg '>
                MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
              </h1>
              <p className='font-roboto text-medium'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
            </div>
            <div className='pt-[63px] sm:pb-0 pb-6'>
              <Button className="text-nowrap rounded-full bg-black text-white">
              Explore MyFeedback business
            </Button>
            </div>
          </div>
          <div>
          <img className='max-w-[612px] w-full object-cover' src="/explore-mybusiness.png" alt="explore-mybusiness.png" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ExploreBusiness
