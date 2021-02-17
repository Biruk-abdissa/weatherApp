import React, {Component} from 'react';

class NavBar extends Component{
    state = {
        search:"",
        
       };
       
     
 handleSubmit = (event) => {
   event.preventDefault();
    
   this.props.handleChange(this.state.search)
   console.log(this.state)
   this.setState({search:""})
      
     }  

    render(){
        return(
            <div className="nav-bar">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input 
                    className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search City" 
                    aria-label="Search"
                    value={this.state.search}
                    onChange={(e)=>{this.setState({search:e.target.value})}}
                    required />
                    <button 
                    className="btn btn-outline-success my-2 my-sm-0" 
                    type="submit">Get Weather</button>
                </form>
            </nav>
            </div>
        );
    }
}
export default NavBar;
