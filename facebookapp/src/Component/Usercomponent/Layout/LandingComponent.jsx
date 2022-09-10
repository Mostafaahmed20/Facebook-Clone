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
          <h4 className="lead">
                Stand out online with a professional website online store or portfolio.
                 you can turn any idea into a reality.
          </h4>
          <div className="buttons">
                <Link to = "/Register" className="btn btn-primary">Sign Up</Link>
                
            <Link to  = "/Login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>





      </div>
    )
  }
}
