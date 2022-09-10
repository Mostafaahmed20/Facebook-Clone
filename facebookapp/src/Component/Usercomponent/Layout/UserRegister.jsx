import React from "react"; 
import { Link } from "react-router-dom";
import Regester from "../../../Fetcing/Regester";
import { Navbar, NavbarBrand } from 'reactstrap'

export default class RegisterComponent extends React.Component{
    state = {
        name: "", 
        age: "", 
        email: "", 
        password: "", 
        error:null , 
        UserData:null 
}

    
    
    HandelName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    
    HandelAge = (e) => {
    this.setState({
    age:e.target.value
})
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
        const { name, age, email, password } = this.state;
        Regester(name, age, email, password).then(data => {
            this.setState({
                UserData:data
            })
        }).catch((err) => {
            this.setState({
               error:err
           })
        })

    e.preventDefault()
    }

render() {


    return (
        <div>

            <Navbar className='my-1' color='dark' dark>
<Link to = "/" >Back to Home</Link>               
    </Navbar>            
    <section className="container">

      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form">
       
        <div className="form-group">
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
                    <div className="form-group">
    
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.HandelName } />
                <input type="text" placeholder="age" value={this.state.age } onChange={this.HandelAge } />
                <input type="text" placeholder="email" value={this.state.email } onChange={this.HandelEmail} />
                <input type="password" placeholder="Password" value={this.state.password } onChange={this.HandelPassword} />
<input type="submit" className="btn btn-primary" value="submit" onClick={this.HandelSubmit}/>
    
        </div>
           
          
      </form>
      <p className="my-1" >
        Already have an account? <Link to="/Login">Sign In </Link>
      </p>
    </section>
 
 
 
 
    </div>
 
 
 
 
 
 
 
 
    )
    }
    }
 
 
 
 
 
            {/* <header>Register</header>
    
            {this.state.UserData == null
                ? <h3>Laoading.....</h3> :
                
                <div>
                    <h3>name {this.state.UserData.data.name}</h3>
                    <img src={this.state.UserData.data.Avatar} />
                    <h3>Age:{this.state.UserData.data.age}</h3>
                    </div>
            }
      */}