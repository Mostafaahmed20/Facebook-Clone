import React from 'react'
import { Link, Route, Routes , useParams } from 'react-router-dom'
import Login from "../Layout/UserLogin"
import RegisterComponent from "../Layout/UserRegister"
import Repo from "../Layout/Repo"
import Notfound from "../Layout/Page404"
import LandingComponent from './LandingComponent'
import Footer from './Fotter'
import { Navbar, NavbarBrand } from 'reactstrap'
import mySvg from "../css/reacteurope2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Home = () => {
  return (
    <div>
      <LandingComponent />

      <Footer/> 
    </div>
  )
}

export default function NavPar() {
  return (
    <div>
  <head>

    <title>Welcome To The Developer Connector</title>
  </head>
      <body>
        
    <Navbar className='my-1' color='dark' dark>
          <NavbarBrand href="/">
    <img
        alt="logo"
        src={mySvg}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "tomato",
          borderRadius: "50%",
          opacity: .5,
              }}
      />
            <span style={{ color: "whitesmoke", fontSize: "25px", fontFamily: "serif" }}> &#174;</span>    
    </NavbarBrand>
          

          <ul>
          <i data-fa-symbol="favorite" class="fa-solid fa-star fa-fw"></i>
            
             
            <Link to="/Developers">Developers</Link>
        <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Repo">Repo</Link>
      </ul>
        </Navbar>        
  </body>

      
  <Routes>  
  <Route path='/' element = {<Home/>}/>   
               
               <Route path='/Developers' element = {<div>wELOCOME DEVOP</div>}/>   
              <Route  path='/Login' element={<Login />}/>
                  <Route exact path='/Register' element={<RegisterComponent />} />
              <Route exact path='/Repo' element={<Repo />} />
                  <Route exact path='*' element={<Notfound />} />
              
          </Routes>

    </div>
  )
}
