import React from "react"
import Repocomponent from "./Repo";
import LoginComponent from "./UserLogin"; 
import RegisterComponent from "./UserRegister"; 
import App from "../../App"
import {  Link, Route,  Routes } from "react-router-dom"; 

export default function Maincomponent() {
    return (
        <div className="Un-orderlist-Dashboard">

            <Link className="LangsList-Dashboard" to="/Repos">Repos</Link>
            <Link className="LangsList-Dashboard" to="/Login">Login</Link>
            <Link className="LangsList-Dashboard" to="/Regester">Regester</Link>


            <Routes>
            <Route path="/Repos" element = {<Repocomponent/>} />
            <Route path="/Login" element = {<LoginComponent/>} />
            <Route path="/Regester" element = {<RegisterComponent/>} />
            
            </Routes>    
        </div>
        

    )
}