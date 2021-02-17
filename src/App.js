import React, { Component } from 'react';
import NavBar from './Components/navBar';
import Weather from './Components/Weather';
import Businesses from './Components/Businesses';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
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
    
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">weather</Link>
          </li>
          <li>
            <Link to="/businesses">businesses</Link>
          </li>
        </ul>

        <Switch>
        <Route path="/weather">
            <Weather weatherInfos={cityInfos}/>
          </Route>
          <Route path="/businesses">
            <Businesses />
          </Route>
          <Route path="/">
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}



export default App;
