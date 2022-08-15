import React from "react"; 
import Regester from "./FetchUser";


export default class RegisterComponent extends React.Component{
    state = {
        name: "", 
        age: "", 
        email: "", 
        password: "", 
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
            return <h3>{err}</h3>
        })

    e.preventDefault()
    }

// name, 
// age, 
// Avatar , 
// email, 
// password: bcryptpass

render() {


    return (
        <div>
    <header>Register</header>
    
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.HandelName } />
                <input type="text" placeholder="age" value={this.state.age } onChange={this.HandelAge } />
                <input type="text" placeholder="email" value={this.state.email } onChange={this.HandelEmail} />
                <input type="text" placeholder="Password" value={this.state.password } onChange={this.HandelPassword} />
<input type="submit" value="submit" onClick={this.HandelSubmit}/>                
 
            {this.state.UserData == null
                ? <h3>Laoading.....</h3> :
                
                <div>
                    <h3>name {this.state.UserData.data.name}</h3>
                    <img src={this.state.UserData.data.Avatar} />
                    <h3>Age:{this.state.UserData.data.age}</h3>
                    </div>
            }
     
        </div>
        )
    }
}