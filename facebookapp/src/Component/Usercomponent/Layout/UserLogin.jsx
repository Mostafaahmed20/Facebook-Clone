import React from "react"; 
import { Link } from "react-router-dom";
import loginUser from "../../../Fetcing/Login"
import {Navbar} from "reactstrap"


export default class Login extends React.Component{

  state = {
    email: "", 
    password: "", 
    UserLogin:null
  }

  HandelEmail = (e) => {
    this.setState({
      email:e.target.value
    })
}

  HandelPassword = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  HandelSubmit = (e) => {
    const { email, password } = this.state; 
    loginUser(email, password).then(data => {
      this.setState({
        UserLogin:data
      })
    }).catch((err)=>err)
    e.preventDefault()
  }
  

    render() {





      return (
            <div>
            <body> 

              
            <Navbar className='my-1' color='dark' dark>
<Link to = "/" >Back to Home</Link>               
    </Navbar>            
          
    <section className="container">

              
      <div className="alert alert-danger">
        Invalid credentials
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={this.HandelSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
                    value={this.state.email}
                    onChange= {this.HandelEmail}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange = {this.HandelPassword}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="submit" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to  = "/register">Sign Up</Link>
      </p>
    </section>
  </body>

 
            </div>
        )
    }
}
