import React from "react"; 
import axios from "axios";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap'
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function RegisterComponent() {
    const reduce = (prev, next) => ({ ...prev, ...next });
    const [Userdata, setUserdata] = useState(null);
    const [UserError, setUserError] = useState({});

    const [{ name, age, email, password   }, setData] = useReducer(reduce, {
        name: "",
        age: "",
        email: "",
        password: "",
        
    });



    
    
    const HandelChange = (e) => {
        const Tag = e.target.name
        const val = e.target.value
        
        setData({ [Tag]: val })
    }
    
    
    
    const HandelSubmit = (e) => {
        e.preventDefault()
  
       axios
        .post(`http://localhost:9999/user/AddUser`, {
          name,
          age,
          email,
          password,
        })
        .then((data) => {
            setUserdata({ ...Userdata, data });
        }).catch((err) => {
            setUserError(err.response.data)
        })
             
             
             
     
     

      
        setData({
            name:"",
            age:"",
            email:"",
            password:"",
        })
    }

    return (
        <div>

            <Navbar className='my-1' color='dark' dark>
                <Link to="/" >Back to Home</Link>
            </Navbar>
            <section className="container">

                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={HandelSubmit}>
       
                    <div className="form-group">
                        <small className="form-text"
                        >This site uses Gravatar so if you want a profile image, use a
                            Gravatar email</small
                        >
                    </div>
                    <div className="form-group">
    
                        <input type="text" className={classnames("form-control form-control-lg", { "is-invalid": UserError.name })}
                            name="name" placeholder="Name" value={name} onChange={HandelChange} />
                        
        {UserError.name && (<div className="invalid-feedback">{UserError.name}</div>)}
                        
        
                        <input type="text" className={classnames("form-control form-control-lg", {
                            "is-invalid":UserError.age
                        })}
                            
                        name="age" placeholder="age" value={age} onChange={HandelChange} />
                        {UserError.age && (<div className="invalid-feedback">{UserError.age}</div>)}


                        <input type="text" className={classnames("form-control form-control-lg", {
                            "is-invalid":UserError.email
                        })} name="email" placeholder="email" value={email} onChange={HandelChange} />

                        {UserError.email && (<div className="invalid-feedback">{UserError.email }</div>)}                


                        <input type="password" className={classnames("form-control form-control-lg", {
                            "is-invalid":UserError.password
                        })} name="password" placeholder="Password" value={password} onChange={HandelChange} />

                        {UserError.password && (<div className="invalid-feedback">{UserError.password }</div>)}

                        <input type="submit" className="btn btn-primary" value="submit" />
    
                    </div>
           
          
                </form>
                <p className="my-1" >
                    Already have an account? <Link to="/Login">Sign In </Link>
                </p>
            </section>
        </div>
 
 
 
    )
    
}

 