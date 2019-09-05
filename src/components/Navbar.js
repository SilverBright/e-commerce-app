import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        
        {/* Icon made by Freepik 
        [https://www.flaticon.com/authors/freepik] 
        from www.flaticon.com */}
      
        <Link to='/' >
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
          jewerly by walt
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to='/' className="nav-link" >
              products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
        <button>
          <i className="fas fa-cart-plus" />
          my cart
        </button>
        </Link>
      </nav>
    )
  }
}

