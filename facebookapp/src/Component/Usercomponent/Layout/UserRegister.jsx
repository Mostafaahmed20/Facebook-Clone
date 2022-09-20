import React from "react"; 
import { Link } from "react-router-dom";
import Regester from "../../../Fetcing/Regester";
import { Navbar, NavbarBrand } from 'reactstrap'
import { useReducer } from "react";

export default function RegisterComponent() {
    const reduce = (prev, next) => ({ ...prev, next });
    const [{ name, age, email, password, error, UserData }, setData] = useReducer(reduce, {
        name: "",
        age: "",
        email: "",
        password: "",
        error: null,
        UserData: null
        
    });



    
    
    const HandelChange = (e) => {
        const val = e.target.value
        const Tag = e.target.name
        
        setData({ [Tag]: val })
    }
    
    
    
    const HandelSubmit = (e) => {
        Regester(name, age, email, password).then(data => {
           setData(data)
        }).catch((err) => {
            setData(err)
        })

        e.preventDefault()
    }


    return (
        <div>

            <Navbar className='my-1' color='dark' dark>
                <Link to="/" >Back to Home</Link>
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
    
                        <input type="text" name="name" placeholder="Name" onChange={HandelChange} />
                        <input type="text" name="age" placeholder="age" onChange={HandelChange} />
                        <input type="text" name="email" placeholder="email" onChange={HandelChange} />
                        <input type="password" name="password" placeholder="Password" onChange={HandelChange} />
                        <input type="submit" className="btn btn-primary" value="submit" onClick={HandelSubmit} />
    
                    </div>
           
          
                </form>
                <p className="my-1" >
                    Already have an account? <Link to="/Login">Sign In </Link>
                </p>
            </section>
 
 
 
 
        </div>
 
 
 
    )
    
}

 