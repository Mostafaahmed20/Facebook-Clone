import axios from "axios";






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