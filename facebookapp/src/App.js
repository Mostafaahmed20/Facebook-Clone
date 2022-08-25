import React from "react"; 
require("./index.css");
import Maincomponent from "./Component/Usercomponent/MainComponent"; 
import { Outlet } from "react-router-dom";
export default  function App() {
  


  return (
    <div>
      <Outlet/>
      <Maincomponent/>
    </div>
  )
 }

