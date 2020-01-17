import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Carousel, Image, Card, Button, p, TabPane, TabContent, Figure } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


import Content1 from './Content1';
import bld_logo from '../assets/images/icons/bld_logo.png';
// import regImg from '../assets/images/reg_img.jpg';
import headerImg from '../assets/images/donate-img.jpg';


class Content extends React.Component {
    render() {
        return (
            
            <content className="content-content pt-4">

                <Content1></Content1>

                    

                <div className="content-header-top pt-5 pb-5">
                    <div className="content-title">
                        <Row>
                            <Col md={12} className="text-center mt-4">
                                <h2 className="section-heading">Blood Share With Us</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={ 12 }>

                                <Row>
                                    <Col></Col>
                                    <Col md={ 2 } className="content-title-line mb-1"></Col>
                                    <Col></Col>
                                </Row>

                                <Row>
                                    <Col></Col>
                                    <Col md={ 2 } className="content-title-line linet-1 mb-1"></Col>
                                    <Col></Col>
                                </Row>

                                <Row>
                                    <Col></Col>
                                    <Col md={ 4 } className="content-title-line linet-2 mb-1"></Col>
                                    <Col></Col>
                                </Row>

                                <Row className="text-center">
                                    <Col></Col>
                                    <Col md={8} className="text-center mt-4">
                                        <p>On her way she met a copy. The copy wcountry. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </Col>
                                    <Col></Col>                                    
                                </Row>    

                                <Row>
                                    <Col md={12} className="text-center mt-4 mb-4">
                                        <Button className="btn-donate">Donate Blood</Button>
                                    </Col>
                                </Row>        

                                <Container>
                                    <Row>
                                        <Col lg={ 12 }  md={ 12 } xs= {12} className="step-title pt-3">
                                            <h3>Things you should know before donation</h3>
                                        </Col>                        
                                    </Row>

                                    <Row>

                                        <Col lg={ 6 } md={ 6 } xs= { 12 } className="step-card text-center">
                                            <div>
                                                <Figure className="figure">

                                                </Figure>
                                            </div>
                                            <div className="text-center">
                                                <h5>First Step</h5>
                                            </div>
                                            <div className="step-botline"></div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </Col>
                                                        

                                        <Col lg={ 6 } md={ 6 } xs= { 12 } className="step-card text-center">
                                            <div>
                                                <Figure className="figure">

                                                </Figure>
                                            </div>
                                            <div className="text-center">
                                                <h5>First Step</h5>
                                            </div>
                                            <div className="step-botline"></div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </Col>
                                                
                                                    
                                    </Row>

                                    <Row>

                                        <Col lg={ 6 } md={ 6 } xs= { 12 } className="step-card text-center">
                                            <div>
                                                <Figure className="figure">

                                                </Figure>
                                            </div>
                                            <div className="text-center">
                                                <h5>First Step</h5>
                                            </div>
                                            <div className="step-botline"></div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </Col>
                                                        

                                        <Col lg={ 6 } md={ 6 } xs= { 12 } className="step-card text-center">
                                            <div>
                                                <Figure className="figure">

                                                </Figure>
                                            </div>
                                            <div className="text-center">
                                                <h5>First Step</h5>
                                            </div>
                                            <div className="step-botline"></div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </Col>
                                                
                                                    
                                    </Row>

                                    <Row>

                                        <Col lg={ 6 } md={ 6 } xs= { 12 } className="step-card text-center">
                                            <div>
                                                <Figure className="figure">

                                                </Figure>
                                            </div>
                                            <div className="text-center">
                                                <h5>First Step</h5>
                                            </div>
                                            <div className="step-botline"></div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </Col>
                                                        

                                        <Col lg={ 6 } md={ 6 } xs= { 12 } className="step-card text-center">
                                            <div>
                                                <Figure className="figure">

                                                </Figure>
                                            </div>
                                            <div className="text-center">
                                                <h5>First Step</h5>
                                            </div>
                                            <div className="step-botline"></div>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </p>
                                            </div>
                                        </Col>
                                                
                                                    
                                    </Row>
                                </Container> 

                            </Col>
                        </Row>                      
                    </div>
                </div>  


            {/* <Content1/> */}
            </content>
            
        );
    }
}

export default Content;