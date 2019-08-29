import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">column number one</div>
        <div className="col-6">column number two</div>
        <span>
            {/* fontawesome home icon */}
          <i className="fas fa-home" />
        </span>
      </div>
    </div>
  );
}

export default App;
