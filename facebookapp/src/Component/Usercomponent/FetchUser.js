import axios from "axios";




export default async function Regester(
    name, 
    age, 
    email, 
    password) {
    const EndPoint = window.encodeURI =  await axios.post(`http://localhost:9000/user/AddUser`, {
        name, 
    age, 
    email, 
    password
        
    }).then(data => {
        return data
        
    }).catch((err) => {
        console.log(err);
    })
    return EndPoint;
} 





