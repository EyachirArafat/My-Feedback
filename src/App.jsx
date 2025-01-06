import React from "react"
import { NavbarOne } from "./components/myNavbar/NavbarOne";
import NavbarTwo from "./components/myNavbar/NavbarTwo";
import HeroSection from "./components/Home/HeroSection";
import LatestTrends from "./components/Home/LatestTrends";
import ExploreBusiness from "./components/Home/ExploreBusiness";
import RecentActivity from "./components/Home/RecentActivity";
import FooterSection from "./components/myFooter/FooterSection";

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
        <FooterSection/>
      </div>
    </>
  )
}

export default App
