import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search:"",
    
   };
   
 
    handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleChange(this.state.search)
    // console.log(this.state)
    this.setState({search:""})
      
    }  
  render() {
    
    return (
      <div className="container mb-3">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-3 text-center">
            <h3 className="text-slanted text-capitalize">
              search weather with{" "}
              <strong className="text-orange">OpenWeatherMap</strong>
            </h3>
            <form className="mt-4" onSubmit={this.handleSubmit}>
              <label htmlFor="search" className="text-capitalize">
                type city name
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="insert city"
                  value={this.state.search}
                    onChange={(e)=>{this.setState({search:e.target.value})}}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    
                    className="input-group-text bg-primary text-white pl-1">
                    Get Weather
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}