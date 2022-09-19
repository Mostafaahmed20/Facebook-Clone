import React  ,  {useState} from "react";
import { Link } from "react-router-dom";
import RepoFetch from "../../../Fetcing/FetchRepos";
import {Navbar , Card , CardBody , CardTitle , CardSubtitle  , CardLink , CardText , Button , Spinner } from "reactstrap"
import { useEffect } from "react";

function HelperFunc({Data , SelectedLang , SelectedLangFunc }) {

    return (
        
        <div className="Un-orderlist">
           
            <h3>You Had selected {SelectedLang}</h3>
            {Data.map((v , i ) => (
                <ul  key={i}>
                    <li className="LangsList" style={SelectedLang == v ? {color:"orange"}:{color:"black"}    
                
                } onClick={() => SelectedLangFunc(v)} key={i}>{v}</li>
                </ul>
            ))}
        </div>
    )

}






function Repo (){
  const[Langs , setLangs ] = useState(["ALL", "mongoDB", "React.js", "Express", "Node.js", "Javascript"]); 
  const [selected, Setselected] = useState("ALL"); 
  const [repo, SetRepo] = useState(null); 
  
  const HandelSelection = (e) => {
    Setselected(e); 

  } 
  
    useEffect(() => {
  
      RepoFetch(selected).then(data=> SetRepo(data))
    
     
      
  } , [selected])


//     state = {
//         Langs: ["ALL", "mongoDB", "React.js", "Express", "Node.js", "Javascript"], 
//         selected: "ALL", 
//         repo:null 
        
// }

//     HandelSelection = (e) => {
//         this.setState({
//             selected: e, 
//             repo:null 
//         })
//         RepoFetch(e).then(data => {
//             this.setState({
//                 repo:data
//             })
//         })

//     }
    
    
        return (
            
            <div className="Repo" style={{ color: "black" }}>

<Navbar className='my-1' color='dark' dark>
<Link to = "/" >Back to Home</Link>               
    </Navbar>     
                
                <HelperFunc Data={Langs }  SelectedLang = {selected} SelectedLangFunc = {HandelSelection} />            
                <div className="container">
                    {repo == null ? <Button
  color="primary"
  disabled
>
  <Spinner size="sm">
    Loading...
  </Spinner>
  <span>
    {' '}Loading
  </span>
</Button> : 
                    
                        <div>
                            <ul className="unOrderList">
                                {repo.items.map((v , i ) => (
                                    
                                    <Card
  style={{
                                            width: '18rem',
                                            height:"400px",
                                            backgroundColor: "black",
                                            margin: "5px",
                                            color: "orange",
                                            wordBreak: "break-word",

     
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      #{i+1}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {v.full_name}
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    className="img" src={v.owner.avatar_url}
    width="100%"
  />
  <CardBody>
                                            <CardText>
                                                {v.description}
    </CardText>
    <CardLink style={{color:"gray"}} href={v.owner.url} >
      Card url
    </CardLink>
    <CardLink style={{color:"gray"}} href={v.owner.repos_url}>
    repos_url
    </CardLink>
  </CardBody>
</Card>

          ))}
                            </ul>
                    </div>
                    }
                </div>
            </div>
        )
    
}

export default Repo; 