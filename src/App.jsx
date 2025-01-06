import React from "react"
import { NavbarOne } from "./components/myNavbar/NavbarOne";
import NavbarTwo from "./components/myNavbar/NavbarTwo";
import HeroSection from "./components/Home/HeroSection";
import LatestTrends from "./components/Home/LatestTrends";
import ExploreBusiness from "./components/Home/ExploreBusiness";
import RecentActivity from "./components/Home/RecentActivity";

function App() {

  return (
    <>
      <div>
        <NavbarOne/>
        <NavbarTwo/>
        <HeroSection/>
        <LatestTrends/>
        <ExploreBusiness/>
        <RecentActivity/>
      </div>
    </>
  )
}

export default App
