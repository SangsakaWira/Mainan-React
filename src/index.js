import React,{Component} from 'react'
import reactDOM from 'react-dom'
import SearchBar from './SearchBar';

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            searched:"Keanu Revees"
        }
    }

    render(){
        return(
            <div>
                <SearchBar></SearchBar>
                <h1 style={{margin:"30px"}}>Result On: {this.state.searched}</h1>
            </div>
        )
    }
}

reactDOM.render(<App></App>,document.querySelector("#root"))