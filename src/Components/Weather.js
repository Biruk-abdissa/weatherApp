import React, {Component} from 'react';
import Search from './Search';
import { Link } from "react-router-dom";

class Weather extends Component{
  
      render(){
      const cityInfos = this.props.cityInfos;
        return(
          <div>
          <Search handleChange={this.handleChange}/>
          <div className="row" >
            {cityInfos.map(weatherInfo=>
            <div key={weatherInfo.name}>
              <div className="card text-center ">
            <div className="card-title">
            <h3>{weatherInfo.name}</h3></div>
                <div className="card-body">
                <ul >
              <li className="">{weatherInfo.temp}<sup>o</sup>C</li>
              <li className="">Feels Like  {weatherInfo.feels_like}<sup>o</sup>c</li>
              <li className="">Pressure: {weatherInfo.pressure}mBar</li>
              <li className="">Humidity: {weatherInfo.humidity}%</li>
              <li className="">Wind-speed:   {weatherInfo.speed}km</li>
              <li className="">Description:  {weatherInfo.description}</li>
              </ul>
                <div>
               
                <Link 
                to={'/businesses' 
                 }
              className="btn btn-primary">
            See Businesses 
            </Link>
                
              </div>
                </div>
            </div>
            </div>
            )}
            </div>
            </div>
            );
        }
    }

export default Weather;
