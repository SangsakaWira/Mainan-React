import React,{Component} from 'react'

export default class SearchBar extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            search_key:""
        }

        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onChangeHandle = event=>{
        console.log(event.target.value)
        this.setState({search_key:event.target.value})
    }

    onFormSubmit = event =>{
        event.preventDefault()
        console.log("Submited")
        console.log("Search: "+this.search_key)
        this.props.onSubmit(this.search_key)
    }
    
    render(){
        return(
            <div className="ui segment" style={{margin:"30px"}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                        placeholder="Search..." 
                        value={this.state.search_key} 
                        onChange={this.onChangeHandle}></input>
                    </div>
                </form>
            </div>
        )
    }
}

