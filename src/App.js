import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    // use fragments to create components that return a list of elements without wrapping them in a container or array
    <React.Fragment>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </React.Fragment>
  );
}

export default App;
