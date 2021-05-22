import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap'
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
        <div className = "App-header">
        <Home/>
        <Footer/>
        </div>


  );
}

export default App;
