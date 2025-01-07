import React from 'react'
import Container from '../../common/Container'
import { Ratings } from '../../Home/Ratings'
import { FaLocationDot } from 'react-icons/fa6'
import { IoTime } from 'react-icons/io5'
import ComponentTitle from '../../common/ComponentTitle'

const BIHero = () => {
  return (
    <div>
      <div >
      <Container>
      <p className="font-semibold text-medium py-3">
        Home / BellaItalia
      </p>

      {/* hero area */}
        <div className="bg-[url('/Bella-italia-hero.png')] bg-cover bg-no-repeat relative sm:mb-[148px] mb-28">
          <div className='md:px-[96px] sm:px-14 sm3:px-4 px-1 pt-[67px] text-white bg-gradient-to-l to-black/50 from-white/0'>
            <div className='space-y-3'>
              <h1 className='font-lexend font-semibold md:text-[52px] sm:text-4xl sm3:text-3xl text-xl'>Bella Italia</h1>
              <Ratings 
              currentRating="5"
              reviews="(834 reviews)"
              cRClass="text-white"
              rClass="text-white"
              />
            </div>
            <p className='max-w-[528px] py-7'>
            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. <br />
            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
            </p>
            <div className='pt-7 pb-28 space-y-6'>
              <div className='flex gap-1 items-center'>
              <FaLocationDot />
              <p>Singapour, Bishan-Ang Mo Kio Park </p>
              </div>
              <div className='flex gap-1 items-center'>
              <IoTime />
              <p>7j/7, 08:00 - 22:00</p>
              </div>
            </div>
          </div>
          <img className='absolute left-1/2 -translate-x-1/2 right-0 -bottom-16' src="/Bella-italia-logo.svg" alt="" />
        </div>
      </Container>
    </div>
    </div>
  )
}

export default BIHero
