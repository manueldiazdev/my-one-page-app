import React from 'react'
import logo from '../logo.svg'

function Footer() {
    return (

            <footer className="App-header p-3" style = {{textAlign: "center"}}>
            <img src={logo} className="App-logo" style = {{width: 'auto'}} alt="logo" />
            <p>         
            Web development isn't my specialty but it's cool to know the basics.
            </p>
            <p className = 'fw-light'>
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
