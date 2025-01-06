import React from "react"
import { NavbarOne } from "./components/myNavbar/NavbarOne";
import NavbarTwo from "./components/myNavbar/NavbarTwo";
import HeroSection from "./components/Home/HeroSection";
import LatestTrends from "./components/Home/LatestTrends";
import ExploreBusiness from "./components/Home/ExploreBusiness";

function App() {

  return (
    <>
      <div>
        <NavbarOne/>
        <NavbarTwo/>
        <HeroSection/>
        <LatestTrends/>
        <ExploreBusiness/>
      </div>
    </>
  )
}

export default App
