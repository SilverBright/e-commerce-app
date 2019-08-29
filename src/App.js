import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // use fragments to create components that return a list of elements without wrapping them in a container or array
    <React.Fragment>
      <h1>Hello from App.js</h1>
    </React.Fragment>
  );
}

export default App;
