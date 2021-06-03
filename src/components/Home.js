import React, {useState} from 'react';
import manueldiaz from '../images/manueldiaz.JPG';
import '../App.css';
import {Alert, Container, Row, Col, Image, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function AlertDismissible(){
const [show, setShow] = useState(true);
    return(
        <>
        <Alert show={show} variant="secondary">
        <Alert.Heading className = "text-center">This website is still a work in progress!</Alert.Heading>
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-secondary">
            Dismiss
          </Button>
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
            
            <Container class = "align-items-center mt-5" >
                <Row>
                    <Col>
                    
                        
                    
                    <Card bg = 'dark'
                    text = "muted">
                    
                    <a
                    href="https://www.linkedin.com/in/manuel-diaz-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Card.Img variant = "top" 
                    src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeospatialmedia.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2018%2F09%2FLinkedIN.png&f=1&nofb=1"
                    className = "Card-image"
                    alt = "Linkedin logo"
                    style = {{backgroundColor: 'white'}}
                    >
                    </Card.Img>
                    </a>
                    <Card.Body>Connect with me on LinkedIn.</Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card bg = 'dark'
                    text = "muted">
                        
                    <a
                    href="https://github.com/manueldiazdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    >

                    <Card.Img variant = "top" 
                    src = "https://2sxc.org/Portals/0/adam/Content/4IqBjx3pXEC7a7-fVX2GBQ/Image/github-logo.png?w=1080&scale=both&quality=50"
                    className = "Card-image"
                    alt = "GitHub logo"
                    style = {{backgroundColor: 'white'}}
                    >
                       
                    </Card.Img>
                    </a>
                    <Card.Body>View my projects on GitHub!</Card.Body>
                        
                    </Card>
                    </Col>
                </Row>
                <Row className = "mt-5 g-0">
                    <Card bg = 'dark'
                    text = "muted"
                    >
                        <Card.Body>Get to know more about me at my personal website</Card.Body>
                        <Card.Link 
                        href="https://manueldiaz.tech"
                        target="_blank"
                        className="App-link"
                        rel="noopener noreferrer"
                        style = {{textAlign: 'center'}}>
                            Link
                        </Card.Link>
                    </Card>
                </Row>
            </Container>
            </div>
            
        
        
        
    )
}


export default Home
