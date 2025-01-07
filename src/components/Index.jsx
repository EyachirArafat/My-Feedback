import React from 'react'
import HeroSection from './Home/HeroSection'
import LatestTrends from './Home/LatestTrends'
import ExploreBusiness from './Home/ExploreBusiness'
import RecentActivity from './Home/RecentActivity'
import NavbarTwo from './myNavbar/NavbarTwo'

const Index = () => {
  return (
    <div>
      <NavbarTwo/>
      <HeroSection/>
      <LatestTrends/>
      <ExploreBusiness/>
      <RecentActivity/>
    </div>
  )
}

export default Index
