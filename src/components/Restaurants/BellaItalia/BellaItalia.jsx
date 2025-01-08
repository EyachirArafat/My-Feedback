import React from 'react'
import BIHero from './BIHero'
import BIGallery from './BIGallery'
import BIInformation from './BIInformation'
import BIOverallRating from './BIOverallRating'
import BIRatings from './BIRatings'
import AlsoDiscoverRestaurant from '../AlsoDiscoverRestaurant'




const BellaItalia = () => {
  return (
    <div>
      <BIHero/>
      <BIGallery/>
      <BIInformation/>
      <BIOverallRating/>
      <BIRatings/>
      <AlsoDiscoverRestaurant/>
    </div>
  )
}

export default BellaItalia
