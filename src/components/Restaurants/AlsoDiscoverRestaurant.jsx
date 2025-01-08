import React from 'react'
import Container from '../common/Container'
import ComponentTitle from '../common/ComponentTitle'
import { DiscoverRestaurantData } from '../../lib/data/apiData'
import MyCarousel from '../common/MyCarousel'
import { NavLink } from 'react-router-dom'
import { Ratings } from '../Home/Ratings'

const AlsoDiscoverRestaurant = () => {
  return (
    <Container className="mb-10">
      <div>
      <ComponentTitle
        className="md:text-xl font-semibold text-[18px] mb-10"
        children="Also Discover..."
      />
      </div>
      <div className='max-w-[1055px]'>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[33px] gap-5">
          {DiscoverRestaurantData.map((item) => (
            <div key={item.id} className=" mx-auto bg-bgS rounded-xl">
              <MyCarousel images={item.images} />
              <NavLink
              to={`/${item.title
                ?.toLowerCase()
                .replace(/[^a-z0-9\s]/g, "")
                .replace(/\s+/g, "-")}`}
              >
                <div className="pt-[13px] pl-[14px] overflow-hidden pb-5 ">
                  <h2 className="text-lg sm:text-xl font-semibold font-roboto text-txtP">
                    {item.title}
                  </h2>
                  <p className="text-txtS font-roboto text-[14px]">
                    {item.des}
                  </p>
                  <div className="pt-[27px]">
                    <Ratings
                      currentRating={item.rating}
                      reviews={item.reviews}
                    />
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default AlsoDiscoverRestaurant
