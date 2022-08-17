import React from "react";
import RepoFetch from "./FetchUser";


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
            <div>

                <HelperFunc Data={this.state.Langs }  SelectedLang = {this.state.selected} SelectedLangFunc = {this.HandelSelection} />            
                <div className="container">
                    {this.state.repo == null ? <h3>Loading ,,,,</h3> : 
                    
                        <div>
                            <ul className="unOrderList">
                                {this.state.repo.items.map((v) => (
                                    <div className="Card">

                                        <li className="List">{v.name}</li>
                                        <li>{v.full_name}</li>
                                        <li>{v.owner.login}</li>
                                        <img className="img" src={v.owner.avatar_url}/>
                                        <li>{v.owner.followers_url}</li>
                                        <li>{v.description}</li>
                                

                                    </div>
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