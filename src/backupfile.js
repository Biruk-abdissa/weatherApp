import React, { Component } from 'react';
import NavBar from './Components/navBar';
import Weather from './Components/Weather';
import Businesses from './Components/Businesses';
import './App.css';
import axios from 'axios';

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
          console.log(response)
          let cityInfos = response.data.map((cityInfo) => {
            return cityInfo;
          });
          this.setState(prevState => ({cityInfos: cityInfos }));
          });
  
        }
        
  render(){
    const {cityInfos}= this.state;
    
  return (
    
    <div>
      <NavBar handleChange= {this.handleChange}/>
      <div className="heading"> 
      <h1>Weather info and Businesses in the city </h1>
      </div>
      <Weather weatherInfos={cityInfos} onClick={this.seeBusinesses}/>
      <Businesses weatherInfos={cityInfos} key={cityInfos.name} />
    </div>
  );
}
}

export default App;
/////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////////////