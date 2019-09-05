import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar px-sm-5">
        
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
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background-color: rgb(166, 155, 188);
.nav-link{
  color: white!important;
  font-size: 1.3rem;
}
`