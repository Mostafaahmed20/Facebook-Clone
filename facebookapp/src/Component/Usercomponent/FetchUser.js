import axios from "axios";




const Regester =   async function (
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





  export default async function RepoFetch (URI) {
    const EndPoint = window.encodeURI = await axios.get(`https://api.github.com/search/repositories?q=${URI}`)
        .then(data => {
  return data.data      
    }).catch((err) => {
        return err 
    })

    return EndPoint; 

}
 


// module.exports = {
//     RegesterFunc: Regester, 
//  Repo:RepoFetch   
// }