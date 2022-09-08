import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Maincomponent from "./Component/Usercomponent/MainComponent";
import Navpar from "./Component/Usercomponent/Layout/Navpar";
require("./Component/Usercomponent/css/style.css");

export default function App() {
  return (
    <div>
      <Navpar />
      <Outlet />
    </div>
  );
}
