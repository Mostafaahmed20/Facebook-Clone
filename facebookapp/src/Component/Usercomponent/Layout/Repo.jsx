import React from "react";
import { Link } from "react-router-dom";
import RepoFetch from "../../../Fetcing/FetchRepos";
import {Navbar , Card , CardBody , CardTitle , CardSubtitle  , CardLink , CardText } from "reactstrap"

function HelperFunc(props) {

    return (
        
        <div className="Un-orderlist">
           
            <h3>You Had selected {props.SelectedLang}</h3>
            {props.Data.map((v , i ) => (
                <ul  key={i}>
                    <li className="LangsList" style={props.SelectedLang == v ? {color:"orange"}:{color:"black"}    
                
                } onClick={() => props.SelectedLangFunc(v)} key={i}>{v}</li>
                </ul>
            ))}
        </div>
    )

}






class Repo extends React.Component{

    state = {
        Langs: ["ALL", "mongoDB", "React.js", "Express", "Node.js", "Javascript"], 
        selected: "ALL", 
        repo:null 
        
}

    HandelSelection = (e) => {
        this.setState({
            selected: e, 
            repo:null 
        })
        RepoFetch(e).then(data => {
            this.setState({
                repo:data
            })
        })

    }
    
    render() {
        

        return (
            
            <div className="Repo" style={{ color: "black" }}>

<Navbar className='my-1' color='dark' dark>
<Link to = "/" >Back to Home</Link>               
    </Navbar>     
                
                <HelperFunc Data={this.state.Langs }  SelectedLang = {this.state.selected} SelectedLangFunc = {this.HandelSelection} />            
                <div className="container">
                    {this.state.repo == null ? <h3>Loading ,,,,</h3> : 
                    
                        <div>
                            <ul className="unOrderList">
                                {this.state.repo.items.map((v , i ) => (
                                    
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




                                    // <div className="Card">
                                       
                                    //     <li style={{color:"whitesmoke"}}>#{i+1}</li>
                                    //     <li>{v.owner.login}</li>
                                    //     <li className="List">{v.name}</li>
                                    //     <img className="img" src={v.owner.avatar_url}/>
                                    //     <li style={{color:"orange" , wordBreak:"break-word"}}>{v.description}</li>
                                        

                                    // </div>
                               ))}
                            </ul>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Repo; 