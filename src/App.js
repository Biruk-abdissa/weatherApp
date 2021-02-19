import React, { Component } from 'react';
import Home from "./pages/Home";
import Default from "./pages/Default";
import NavBar from './Components/navBar';
import Weather from './Components/Weather';
import Businesses from './Components/Businesses';
import {
  BrowserRouter as Router,
  Switch,
  Route
      
} from "react-router-dom";
import axios from 'axios';
import './App.css';
// import axios from 'axios';

class App extends Component {
  state = {
    city:"",
    // loading: true,
    cityInfos: [
      {
        name:"",
        temp:"",
        feels_like:"",
        pressure:"",
        humidity:"",
        info:[]
        
      },
      
    ],
    
  };   

  getData = async (e) => {
    await axios
        .post('http://localhost:3002/city',{
          
        city: this.state.city
      })
       .then((response) => {
         
         let cityInfos = response.data.map((cityInfo) => {
            return cityInfo;
          });
          this.setState(prevState => ({...prevState,cityInfos: cityInfos }));
          });
  
  }
    
  handleChange = (cityy) => { 
        
    this.setState(prevState => ({...prevState,city:cityy}),() =>{
    this.getData();
    });
  
  }
   
    componentDidMount() {
      axios
        .get('http://localhost:3002/cities')
      
        .then((response) => {
          // console.log(response)
          let cityInfos = response.data.map((cityInfo) => {
            return cityInfo;
          });
          this.setState(prevState => ({cityInfos: cityInfos }));
          });
           
    }
    
  render(){
    
    
  return (
    
    <Router>
        <main>
          {/* navbar */}
          <NavBar handleChange= {this.handleChange}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/weather" exact render={props => <Weather cityInfos={this.state.cityInfos}{...props}/>} />
            <Route path="/businesses" render={props => <Businesses cityInfos={this.state.cityInfos}{...props}/>} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
  );
}
}



export default App;
