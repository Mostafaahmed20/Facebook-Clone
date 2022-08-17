import React from "react"; 
require("./index.css");
import RegisterComponent  from "./Component/Usercomponent/UserRegister"
import LoginComponent  from "./Component/Usercomponent/UserLogin"

import Repo from "./Component/Usercomponent/Repo"


export default  function App() {
  


  return (
    <div>
      <RegisterComponent />
      <LoginComponent />
      <Repo/>
    </div>
  )
 }

