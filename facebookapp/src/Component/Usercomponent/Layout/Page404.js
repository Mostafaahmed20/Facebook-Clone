import React from "react";
import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div className="notfound">
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i>Facebook
          </Link>
        </h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Developers">Developers</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Repo">Repo</Link>
        </ul>
      </nav>
      <h3>Page not found </h3>
    </div>
  );
}

export default Notfound;
