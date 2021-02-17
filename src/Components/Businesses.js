import React from 'react';
import imageBar from '../images/kate-townsend.jpg';
// import { Link } from 'react-router-dom';

    const Businesses = ({ weatherInfos }) => { 
    
    return(
        <div className="row" key={weatherInfos.Id}>
        
        {weatherInfos.map(weatherInfo=>
            <div key={weatherInfo.name}>
            <span>
            <h1>Businesses found in {weatherInfo.name} </h1>
            </span>
            <ul className="image_flex" >
            {weatherInfo.info.map(business=>
                <div className=" " key={business.id}>
                <div className="business-box" key={business.id}>
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
                Back to Home
                 </button>
            </div>
            
            )}
        </div>
    )
}

export default Businesses;