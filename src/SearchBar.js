import React,{Component} from 'react'

export default class SearchBar extends Component{
    render(){
        return(
            <div className="ui segment" style={{margin:"30px"}}>
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Search..."></input>
                    </div>
                </form>
            </div>
        )
    }
}

