import React from 'react'
import logo from '../logo.svg'

function Footer() {
    return (

            <footer className="App-header p-3" style = {{textAlign: "center"}}>
            <img src={logo} className="App-logo" style = {{width: 'auto'}} alt="logo" />
            <p>         
            Consistently learning and developing this website with React Js and Bootstrap styling.
            </p>
            <p>
            Check out the source of this project <a
            href="https://github.com/manueldiazdev/my-one-page-app/tree/master"
            target="_blank"
            rel="noopener noreferrer"
            className = 'App-link'
            >here</a> !</p>
        
        
            </footer>
    )
}

export default Footer
