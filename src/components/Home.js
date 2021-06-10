import React, {useState} from 'react';
import manueldiaz from '../images/manueldiaz.JPG';
import '../App.css';
import {Alert, Row, Col, Image, Card, Button} from 'react-bootstrap';
import { Github, Linkedin, Instagram, Facebook, Window} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactTypingEffect from 'react-typing-effect';
function AlertDismissible(){
const [show, setShow] = useState(true);
    return(
        <Alert show={show} variant="secondary" >
        <Alert.Heading className = 'text-center'>This website is still a work in progress!
        </Alert.Heading>
        <div className="d-flex justify-content-center">
        <Button onClick={() => setShow(false)} variant="light" className = 'd-flex justify-content-center fw-light'>Dismiss</Button>
        </div>
        </Alert>
    )
}


function Home(){
    return(
        <div>
            <AlertDismissible />
            <header className = "App m-4">
            <h1 className = "fade-in"> Manuel Diaz </h1>
            <h2 className = "fade-in mb-4 fs-5 fw-light">
                <ReactTypingEffect text = {[
                    "CpE Student at Sac State",
                    "SWE Intern at Nordstrom",
                    "Music Producer Enthusiast"]} 
                speed = {100}
                eraseSpeed = {65}
                typingDelay = {25}/>
            </h2>
            <Image className = 'resize mb-1'  src = {manueldiaz} alt = "manuel diaz" fluid rounded/>
            </header>
            
            <Card bg = 'dark' className = 'mt-5 cardHover'>
                <Row className = 'g-0'>
                    <Col>
                        <Github size = {200} className = 'Card-image'></Github>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Checkout my <Card.Link 
                            href="https://github.com/manueldiazdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className = 'App-link'>GitHub</Card.Link>!</Card.Title>
                            <Card.Text className = 'fw-light'> For the most part, I open source everything I work on like this website.</Card.Text>
                        </Card.Body>
                    </Col>
                    
                </Row>
            </Card>
            <Card bg = 'dark' className = 'mt-5'>
                <Row className = 'g-0'>
                    <Col>
                        <Linkedin size = {200}  className = 'Card-image'/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Connect with me on <Card.Link 
                            href="https://www.linkedin.com/in/manuel-diaz-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className = 'App-link'>LinkedIn</Card.Link>!</Card.Title>
                            <Card.Text className = 'fw-light'> Feel free to start a conversation or take a look at my work history.</Card.Text>
                        </Card.Body>
                    </Col>
                    
                </Row>
            </Card>
            <Card bg = 'dark' className = 'mt-5'>
                <Row className = 'g-0'>
                    <Col>
                        <Instagram size = {200}  className = 'Card-image'/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Follow me on <Card.Link 
                            href="https://www.instagram.com/manueldiazdev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className = 'App-link'>Instagram</Card.Link>!</Card.Title>
                            <Card.Text className = 'fw-light'> Take a quick look at a few photos of my interests and day to day life.</Card.Text>
                        </Card.Body>
                    </Col>
                    
                </Row>
            </Card>

            <Card bg = 'dark' className = 'mt-5'>
                <Row className = 'g-0'>
                    <Col>
                        <Facebook size = {200}  className = 'Card-image'/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Friend me on <Card.Link 
                            href="https://www.facebook.com/profile.php?id=100057354373534"
                            target="_blank"
                            rel="noopener noreferrer"
                            className = 'App-link'>Facebook</Card.Link>!</Card.Title>
                            <Card.Text className = 'fw-light'>Know what event i'll be at next, or maybe invite me to yours.</Card.Text>
                        </Card.Body>
                    </Col>
                    
                </Row>
            </Card>

            <Card bg = 'dark' className = 'mt-5'>
                <Row className = 'g-0'>
                    <Col>
                        <Window size = {200}  className = 'Card-image'/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>Learn more about me on <Card.Link 
                            href="https://manueldiaz.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className = 'App-link'>my website</Card.Link>!</Card.Title>
                            <Card.Text className = 'fw-light'>Visit my personal webpage for more insight on my work.</Card.Text>
                        </Card.Body>
                    </Col>
                    
                </Row>
            </Card>
            </div>
        
        
        
    )
}


export default Home
