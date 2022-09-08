import React from 'react'
import NavPar from "./Layout/Navpar";
import LandingComponent from "../Usercomponent/Layout/LandingComponent"
import Footer from "../Usercomponent/Layout/Fotter"
import { Link, Route, Routes } from 'react-router-dom';

function MainComponent() {
  return (
      <div className='Container'>
          <NavPar />
          <LandingComponent />
          <Footer />
          
          
      </div>
      
  )
}

export default MainComponent