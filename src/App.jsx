import React from "react"
import { NavbarOne } from "./components/myNavbar/NavbarOne";
import FooterSection from "./components/myFooter/FooterSection";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <header className="mx-auto">
      <NavbarOne/>
    </header>
    <main><Outlet/></main>
    <footer><FooterSection/></footer>
    </>
  )
}

export default App
