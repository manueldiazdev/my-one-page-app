import React from 'react';
import manueldiaz from '../images/manueldiaz.JPG';
import '../App.css';
import { Container, Row, Col, Image, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Home(){
    return(

            <div className = "App-header">
            <header className = "App">
            <h1> Manuel Diaz </h1>
            <p> Links to everywhere.</p>
            <Image src = {manueldiaz} alt = "manuel diaz" fluid rounded/>
            </header>

            
            <Container>
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
                    src = "https://wordvice-wp-static.s3-ap-northeast-1.amazonaws.com/uploads/2019/01/LinkedIn_HP.jpg"
                    className = "Card-image"
                    >
                       
                    </Card.Img>
                    </a>
                    <Card.Body>View my projects on GitHub!</Card.Body>
                        
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
                    src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhtxt.co.za%2Fwp-content%2Fuploads%2F2018%2F11%2Fgithub-logo.jpg&f=1&nofb=1"
                    className = "Card-image"
                    >
                       
                    </Card.Img>
                    </a>
                    <Card.Body>Connect with me on LinkedIn</Card.Body>
                        
                    </Card>
                    </Col>
                </Row>
                    <Col>
                    <Card bg = 'dark'
                    text = "muted">
                        <Card.Body>My personal website</Card.Body>
                        <Card.Link 
                        href="https://manueldiaz.tech"
                        target="_blank"
                        className="App-link"
                        rel="noopener noreferrer"
                        >
                            Link
                        </Card.Link>
                    </Card>
                    </Col>

            </Container>
            </div>
            
        
        
        
    )
}


export default Home
