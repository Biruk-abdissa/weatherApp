import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Home extends Component {
      
      render() {
      
        return (
            <div className="bg-image">
            <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize header-color">
              search weather with{" "}
              <strong className="text-orange">OpenWeatherMap</strong>
            </h1>
            <Link to="/weather">
            Search Weather
            </Link>
          </div>
        </div>
      </div>
          </div>
        )
    }
}

export default Home
