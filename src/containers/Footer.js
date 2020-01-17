import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Row, Col, Form, Button, p, Image } from 'react-bootstrap';
import SideNav, { Toggle, NavIcon, NavText } from '@trendmicro/react-sidenav';



class Footer extends React.Component {
    render() {
        return(
    <footer className="site-footer pb-5">
        <Container>
            <Row>
                <Col sm={12} md={6} className="text-center">
                    <h6>About Team Members</h6>
                        <Row>
                            <Col xs={6} md={3} className="footer-img text-center">
                                <Image className="footer-imgs" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" roundedCircle />
                                <label>Htet Naing Aung</label>
                            </Col>
                            <Col xs={6} md={3} className="footer-img text-center">
                                <Image className="footer-imgs" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" roundedCircle />
                                <label>Hlaing Hlaing Ei</label>
                            </Col>
                            <Col xs={6} md={3} className="footer-img text-center">
                                <Image className="footer-imgs" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" roundedCircle />
                                <label>Aung Ko Ko That</label>
                            </Col>
                            <Col xs={6} md={3} className="footer-img text-center">
                                <Image className="footer-imgs" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" roundedCircle />
                                <label>Moh Moh Aye</label>
                            </Col>
                        </Row>
                </Col>

                <Col xs={6} md={6} className="text-center">
                    <h6>Categories</h6>
                    <ul className="footer-links">
                    <li><label></label></li>
                    <li><label></label></li>
                    <li><label></label></li>
                    <li><label></label></li>
                    <li><label></label></li>
                    <li><label></label></li>
                    </ul>
                </Col>
                
            </Row>            
        </Container>

        <Container>
            <Row>
                <Col md={12} sm={6} xs={12} className="text-right">
                    <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved</p>
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <ul className="social-icons">
                    {/* <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
                    <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>    */}
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
        );
    }
}

export default Footer;