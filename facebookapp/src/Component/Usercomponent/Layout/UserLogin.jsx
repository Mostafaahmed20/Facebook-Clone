import React, { useReducer } from "react"; 
import { Link } from "react-router-dom";
import loginUser from "../../../Fetcing/Login"
import {Navbar} from "reactstrap"


export default function  Login (){
  const reduce = (prev, next) => ({ ...prev, ...next }); 
  const [{ email, password }, SetData] = useReducer(reduce, {
    email: "", 
    password : ""
  });  
  
  const HandelChange = (e) => {
    const val = e.target.value; 
    const Tag = e.target.name; 
    SetData({[Tag]:val})
}

  // state = {
  //   email: "", 
  //   password: "", 
  //   UserLogin:null
  // }

//   HandelEmail = (e) => {
//     this.setState({
//       email:e.target.value
//     })
// }

//   HandelPassword = (e) => {
//     this.setState({
//       password:e.target.value
//     })
//   }


 const HandelSubmit = (e) => { 
    loginUser(email, password).then(data => {
      this.setState({
        UserLogin:data
      })
    }).catch((err)=>err)
    e.preventDefault()
  }
  

    


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
      <form className="form" onSubmit={HandelSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
                    onChange= {HandelChange }
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
                    name="password"
                    onChange = {HandelChange}
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
