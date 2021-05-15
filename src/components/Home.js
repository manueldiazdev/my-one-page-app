import React from 'react';
import manueldiaz from '../images/manueldiaz.JPG';
import '../App.css';

function Home(){
    return(
        <div className = "App">
            <header className = "App-header">
            <h1> Manuel Diaz </h1>
            <img src = {manueldiaz} alt = "manuel diaz"/>
                
            <a
            href="https://www.linkedin.com/in/manuel-diaz-dev/"
            target="_blank"
            className="App-link"
            rel="noopener noreferrer"
            >
                Connect with me on LinkedIn.</a>
            
            </header>
            
            
        </div>
        
        
        
    )
}


export default Home
