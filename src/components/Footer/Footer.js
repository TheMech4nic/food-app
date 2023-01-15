import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css'


const Footer = () => {
  return <footer className='footer'>
    <Container>
        <Row>
            <Col lg='4' md='4' sm='6'>
            <div className='footer__logo text-start'>
                <img src={logo} alt='logo' />
                <h5>Tasty Treat</h5>
                <p>
                    Loremo AG was a German automaker corporation, based in Marl. 
                It was founded in 2000 and went out of business in 2010. 
                
                </p>
            </div>
            </Col>
            <Col lg='4' md='4' sm='6'>
                <h5 className='footer__title'>Delivery Time</h5>
                <ListGroup className='delivery__time-list'>
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Sunday - Thrusday</span>
                        <p>10:00am - 11:00pm</p>
                    </ListGroupItem>

                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <span>Friday - Saturday</span>
                        <p >Off Day</p>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col lg='4' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
                <ListGroup className='delivery__time-list'>
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <p><span>Location:</span> Tun Tun Mosi ka Thela, Dholakpur</p>
                        
                    </ListGroupItem>

                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <p><span>Phone:</span> +91 6263888051</p>
                        
                    </ListGroupItem>

                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                        <p><span>Email: </span>tastytreat123@gmail.com</p>
                        
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col lg='4' md='4' sm='6'>
                <h5 className='footer__title'>Newsletter</h5>
                <p>Subscribe our Newsletter</p>
                <div className='newsletter'>
                    <input type="email" placeholder="Enter your email" />
                    <span><i className='ri-send-plane-line'></i></span>
                </div>
            </Col>
        </Row>
        <Row className='mt-5'>
            <Col lg='6' md='6'>
                <p className='copyright__text'>Copyright - 2022, website made by Mishra Ji. All Right Reserved</p>
            </Col>
            <Col lg='6' md='6'>
                <div className='social__links d-flex align-items-center gap-2 justify-content-end'>
                    <p className='m-0'>Follow: </p>
                    <span><Link to=''><i className='ri-facebook-line'></i></Link></span>
                    <span><Link to=''><i className='ri-github-line'></i></Link></span>
                    <span><Link to=''><i className='ri-instagram-line'></i></Link></span>
                    <span><Link to=''><i className='ri-youtube-line'></i></Link></span>
                    <span><Link to=''><i className='ri-linkedin-line'></i></Link></span>
                </div>
            </Col>
        </Row>
    </Container>
  </footer>
}

export default Footer