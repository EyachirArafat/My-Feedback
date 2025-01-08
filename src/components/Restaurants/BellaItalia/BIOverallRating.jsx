import React from 'react'
import Container from '../../common/Container'
import ComponentTitle from '../../common/ComponentTitle'
import { Ratings } from '../../Home/Ratings'
import {Progress} from "@nextui-org/react";

const BIOverallRating = () => {
  return (
    <Container>
      <div className='border-y-1 pt-4 sm:pt-14 pb-4 sm:pb-14'>
        <div className='flex flex-wrap sm:gap-12 gap-3'>
          <div className='flex gap-3'>
            <img className='w-12 h-12' src="/overall-rating.svg" alt="Overall rating" />
            <div>
              <ComponentTitle
                className="md:text-xl font-semibold text-[18px] mb-1 text-nowrap"
                children="Overall rating"
              />
              <p className='text-txtS text-[14px] pb-6'>834 Reviews</p>
              <Ratings currentRating="5" cRClass="hidden"/>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 w-full max-w-md leading-3">
              <div className='flex justify-center items-center gap-3'>
                <p className='text-nowrap'>5 stars</p>
                <Progress aria-label="Loading..." size="md" value={100} />
              </div>
              <div className='flex justify-center items-center gap-3'>
                <p className='text-nowrap'>4 stars</p>
                <Progress aria-label="Loading..." size="md" value={80} />
              </div>
              <div className='flex justify-center items-center gap-3'>
                <p className='text-nowrap'>3 stars</p>
                <Progress aria-label="Loading..." size="md" value={60} />
              </div>
              <div className='flex justify-center items-center gap-3'>
                <p className='text-nowrap'>2 stars</p>
                <Progress aria-label="Loading..." size="md" value={40} />
              </div>
              <div className='flex justify-center items-center gap-3'>
                <p className='text-nowrap'>1 stars</p>
                <Progress aria-label="Loading..." size="md" value={20} />
              </div>
            </div>

         
        </div>
      </div>
    </Container>
  )
}

export default BIOverallRating
