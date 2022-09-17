import Home from "./pages/Home";
import React from "react";
import { ReactDOM } from "react-dom";
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from './pages/Register';
//import App1 from './App'

const App = () => {
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
    });   
}
  return <Home/>;
};



export default App;


