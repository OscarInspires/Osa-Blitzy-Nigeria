import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Form from "./components/Form";
import Modal from './components/Modal';
//import Header from "./components/Header";



 class App extends Component {
  render() {
    return (
     <React.Fragment>
     <Navbar/>
     
    <Switch>
    
    <Route exact path="/" component={Productlist} />
    <Route path="/details" component={Details} />
    <Route path="/cart" component={Cart} />
    <Route path="/form" component={Form} />
    <Route  component={Default} />
   
    </Switch>
    
    <Modal/>
    
    </React.Fragment>
    
    
    );
  }
}
export default App;

