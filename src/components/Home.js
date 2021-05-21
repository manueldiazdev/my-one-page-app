import React from 'react';
import manueldiaz from '../images/manueldiaz.JPG';
import '../App.css';

function Home(){
    return(
        <div className = "App">
            <header className = "App-header">
            <h1> Manuel Diaz </h1>
            <h3> Personally made link tree.</h3>
            <img src = {manueldiaz} alt = "manuel diaz"/>
                
            <a
            href="https://www.linkedin.com/in/manuel-diaz-dev/"
            target="_blank"
            className="App-link"
            rel="noopener noreferrer"
            >
                Connect with me on LinkedIn.</a>
            
            
            <a
            href="https://manueldiaz.tech"
            target="_blank"
            className="App-link"
            rel="noopener noreferrer"
            >
                My personal website</a>
            </header>
            
            
        </div>
        
        
        
    )
}


export default Home
