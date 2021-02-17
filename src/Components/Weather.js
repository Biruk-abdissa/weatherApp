import React, {Component} from 'react';
// import Businesses from './Businesses';
// import { Link } from "react-router-dom";
class Weather extends Component{
  
 
     render(){
        const {weatherInfos} = this.props;
        return(
            <div className="row" >
            {weatherInfos.map(weatherInfo=>
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
                <a href="/businesses/" className="btn btn-primary" 
                target="_blank"> 
                See Businesses 
                </a>
                
              </div>
                </div>
            </div>
            </div>
            )}
            </div>
            );
        }
    }

export default Weather;