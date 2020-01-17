import React from 'react';
// import Content from '../Content';                                                                                                                                                                                                                                                                                                                                        
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Carousel, Image, Card, Button, p, TabPane, TabContent } from 'react-bootstrap';

// import headerImg from '../assets/images/donate-img.jpg';

class Content1 extends React.Component {
    render() {
        return (
            <Router>
                    <Carousel>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img className="d-block" src="https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_5.jpg" alt="First slide"/>
                            </div>
                            <Carousel.Caption>
                                <h3>Safe Life, Be Hero</h3>
                                <p>Donating blood is safe and easy to do. But many people are needlessly fearful of donating because of myths about the effects of giving blood. Your donation can make a huge difference in the life of someone.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img className="d-block" src="https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_4.jpg" alt="Third slide"/>
                            </div>

                            <Carousel.Caption>
                            <h3>I'm too old to donate blood</h3>
                            <p>Donating blood is safe and easy to do. But many people are needlessly fearful of donating because of myths giving blood.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img">
                                <img className="d-block" src="https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_4.jpg" alt="Third slide"/>
                            </div>

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-img">
                                <img className="d-block" src="https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_1.jpg" alt="Third slide"/>
                            </div>

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </Router>
        )
    }
}

export default Content1;