import React, { Component } from 'react'
import {Link} from "react-router-dom"
class navBar extends Component {
    
     render(){
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-1ight">
        <Link to='/' className="navbar-brand">
            <h2>WeatherApp</h2>
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5">
            <ul className="navbar-nav">
            <li className="navbar-item">
            <Link to='/' className="nav-link">
            Home
            </Link>
            </li>
            </ul>
            </div>
          </nav>
    )
}
}
export default navBar
