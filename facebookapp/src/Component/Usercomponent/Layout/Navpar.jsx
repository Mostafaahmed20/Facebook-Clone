import React from 'react'
import { Link, Route, Routes , useParams } from 'react-router-dom'
import Login from "../Layout/UserLogin"
import RegisterComponent from "../Layout/UserRegister"
import Repo from "../Layout/Repo"
import Notfound from "../Layout/Page404"
import LandingComponent from './LandingComponent'
import Footer from './Fotter'

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
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
        
    <nav className="navbar bg-dark">
          <h1>
        <Link to ="/"><i className="fas fa-code"></i>Facebook</Link>
      </h1>
          <ul>
            <Link to = "/" >Home</Link>
            <Link to="/Developers">Developers</Link>
        <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Repo">Repo</Link>
      </ul>
        </nav>        
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
