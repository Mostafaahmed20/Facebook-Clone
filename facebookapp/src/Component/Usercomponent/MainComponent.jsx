import React from "react"
import Repocomponent from "./Repo";
import LoginComponent from "./UserLogin"; 
import RegisterComponent from "./UserRegister"; 
import App from "../../App"
import { Routes, Link, Route } from "react-router-dom"; 

export default function Maincomponent() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/Login" >Login</Link>
                
                </li>
                <li>
                    <Link to="/Regster" >Regster</Link>
                </li>
                <li>
                    <Link to="/Repo" >/Repo</Link>
                </li>
                <li><Link to  = "/"></Link></li>
            </ul>
            <Routes>
                <Route path="/Login" element={<LoginComponent />} />
                <Route path="/Regster" element={<RegisterComponent />} />
                <Route path="/Repo" element={<Repocomponent />} />
                <Route path="/" element =  {<App/>}/>
</Routes>
        </div>
    )
}