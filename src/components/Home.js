import React, {useState} from 'react';
import manueldiaz from '../images/manueldiaz.JPG';
import '../App.css';
import {Alert, Container, Row, Col, Image, Card, Button} from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
function AlertDismissible(){
const [show, setShow] = useState(true);
    return(
        <>
        <Alert show={show} variant="secondary" >
        <Alert.Heading className = 'text-center'>This website is still a work in progress!
        </Alert.Heading>
        <div className="d-flex justify-content-center">
        <Button onClick={() => setShow(false)} variant="light" className = 'd-flex justify-content-center'>Dismiss</Button>
        </div>
        </Alert>
        {/*<!-- this button isn't required
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        -->*/}
        </>
    )
}

function Home(){
    return(
            <div>
            <AlertDismissible />
            <header className = "App m-4">
            <h1 className = "fade-in"> Manuel Diaz </h1>

            <Image className = 'resize'  src = {manueldiaz} alt = "manuel diaz" fluid rounded/>
            </header>
            <Card bg = 'dark m-3 flex'>
                <Row className = 'g-0'>
                    <Col>
                        <Github size = {150} className = 'ml-5'></Github>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Checkout my <Card.Link 
                            href="https://github.com/manueldiazdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className = 'App-link'>GitHub</Card.Link>!</Card.Title>
                            <Card.Text> For the most part, I open source everything I work on, even this website.</Card.Text>
                        </Card.Body>
                    </Col>
                    
                </Row>
            </Card>
            <Card bg = 'dark m-3'>
                <Row className = 'g-0'>
                    <Col>
                        <Linkedin size = {150}/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Connect with me on <Card.Link 
                            href="https://www.linkedin.com/in/manuel-diaz-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className = 'App-link'>LinkedIn</Card.Link>!</Card.Title>
                            <Card.Text> Feel free to start a conversation or take a look at my work history.</Card.Text>
                        </Card.Body>
                    </Col>
                    
                </Row>
            </Card>
            </div>
        
        
        
    )
}


export default Home
