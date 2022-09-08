import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class LandingComponent extends Component {
  render() {
    return (
      <div>
        
             <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Get in Touch</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
                <Link to = "/Sign Up" className="btn btn-primary">Sign Up</Link>
                
            <Link to  = "/Login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>





      </div>
    )
  }
}
