import React from "react";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero_Video from "./components/Hero_Video";
import Cards from "./components/Cards";
import Parallax from "./components/Parallax";
import About from "./components/About";
import Success from "./components/Success";
import Portfolio_Desc from "./components/Portfolio_Desc";
import Portfolio from "./components/Portfolio";
import DigitalDesign from "./components/DigitalDesign";
import ProjectInMind from "./components/ProjectInMind";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App(){
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="Main cursor-none relative w-full min-h-screen bg-zinc-950 text-white box-border">
      <Cursor/>
      <NavBar/>
      <Header/>
      <Hero/>
      <Hero_Video/>
      <Cards/>
      <Parallax/>
      <About/>
      <Success/>
      <Portfolio_Desc/>
      <Portfolio/>
      <DigitalDesign/>
      <ProjectInMind/>
      <Footer/>
    </div>
  )
}

export default App;