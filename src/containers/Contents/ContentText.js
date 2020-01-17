import React from 'react';
// import { ReactComponent } from '*.svg';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Carousel, Image, Card, Button, p, TabPane, TabContent } from 'react-bootstrap';


class ContentText extends React.Component {
    render() {
        return (
            <div className="content-header-top pb-5">
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
                                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </Col>
                                <Col></Col>                                    
                            </Row>            

                        </Col>
                    </Row>                      
                </div>
            </div>
    

        );
    }
}

export default ContentText;