import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LoginIcon from '@mui/icons-material/Login';
import "../Navbar/Navbar.css";
const Navbar = () => {

  const getdata=useSelector((state)=>state.cartreducer)
  console.log(getdata)

  return (
    <>
      
      
<nav className="navbar navbar-expand-lg   fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="/">
          <img src="../image/logo.png" alt="logo" style={{width:'100px'}} />
        </Link>
        
          <div style={{float:'left'}}>
         <button style={{float:'right'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{color:'white'}}></span>
        </button>
        </div>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav col-lg-mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home
          
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    
     <div style={{float:'right'}}>
       <div className="shopingicons mr-auto">

          <Link to="/cart" className="icons-btn d-inline-block bag">
            <span className="number"><ShoppingBasketIcon />{getdata.length}</span>
          </Link>

        </div>
      </div>
    
 
  </div>
           
</nav>
    </>
  );
};
export default Navbar;
