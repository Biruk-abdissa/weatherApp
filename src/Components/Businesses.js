import React, { Component } from 'react'
import imageBar from '../images/kate-townsend.jpg';
import { Link } from "react-router-dom";
export class Businesses extends Component {
    
    render() {
        let Data = this.props.cityInfos;
        const name = this.props.match.params.name;
        Data = Data.filter(city=>city.name===name)
        return (
            <div className="row" key={Data.Id}>
        
        {Data.map(weatherInfo=>
            <div key={weatherInfo.name}>
            <span>
            <h1>Businesses found in {weatherInfo.name} </h1>
            </span>
            <ul className="image_flex" >
            {weatherInfo.info.map(business=>
                <div className=" " key={business.id}>
                <div className="business-box" key={business.name}>
                <img src={business.image_url !== ""?   business.image_url : imageBar} alt={business.name}/>
                <div className="list_style">
                <li >{business.name}</li>
                <li>{business.location.address1}</li>
                </div>
                </div>
                </div>
                )}
                
                </ul>
                <button className="btn btn-primary">
                <Link to='/weather'>Back to Home </Link>
                 </button>
            </div>
            
            )}
        </div>
        )
    }
}

export default Businesses
