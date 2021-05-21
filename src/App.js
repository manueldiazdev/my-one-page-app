import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
          Consistently learning and developing this website with React Js.
        </p>
        
        
      </header>
    </div>
  );
}

export default App;
