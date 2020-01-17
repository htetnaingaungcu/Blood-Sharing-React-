import React from 'react';
import { Container,  Row, Col, Carousel, Image, Caption, Nav, Navbar, Collapse } from 'react-bootstrap';

import headerImg from '../assets/images/donate-img.jpg';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import RegisterForm from '../components/auth/RegisterForm';
import LoginForm from '../components/auth/LoginForm';
import DonationForm from '../components/container/DonationForm';
import DonationSecondForm from '../components/container/DonationSecondForm';
import BloodRequestForm from '../components/container/BloodRequestForm';
import BloodRequestList from '../components/container/BloodRequestList';
import getAllRequestList from '../components/container/getAllRequestList';
import UserBloodRequest from '../components/container/UserBloodRequest';

import DonorPage from '../components/container/DonorPage';
import RequestPage from '../components/container/RequestPage';

import MessagePage from "../components/container/MessagePage";
import { signOutEvent } from '../actions/userActions';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer :false,
        }
    }
    handleLogout = (e) => {
        e.preventDefault();
        this.props.signOutEvent(()=>{
            this.setState({
                redirectToReferrer : true,
            })
        });
        
    }
    render() {
		if (this.state.redirectToReferrer) return <Redirect to="/login" />;

        return (
            <Router>
                <header>
                    <Navbar expand="lg">
                        {/* <Navbar.Brand to="/">Blood-Sharing</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="nav-link">
                                <Link to="/" className="main-logo">Blood Sharing</Link>
                            </Nav>
                            
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="nav-link ml-auto">
                                    <Link to="/" className="mr-4">Home</Link>

                                    {this.props.currentUser == null && (
                                        <React.Fragment>
                                            <Link to="/register" className="mr-4">Register</Link >
                                            <Link to="/login" className="mr-4">Login</Link >
                                            <Link to="/allrequestlist" className="mr-4">Request Lists</Link >
                                        </React.Fragment>
                                    )} 

                                    {this.props.currentUser !== null && (     
                                    <React.Fragment>
                                        <Link to="/donorInfo" className="mr-4">Donor</Link>
                                        <Link to="/requestInfo" className="mr-4">Request</Link>
                                        <span onClick={this.handleLogout}>Logout</span>
                                    </React.Fragment>   
                                    )}
                                
                                </Nav>

                            </Navbar.Collapse>
                    </Navbar>

                    {/* <div className="header-img">
                        <img src={headerImg}/>
                    </div> */}
                </header>
                
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={LoginForm} />
                <Route exact path="/donate" component={DonationForm} />
                <Route exact path="/donate/next" component={DonationSecondForm} />
                <Route exact path="/blood/request" component={BloodRequestForm} />
                <Route exact path="/allrequestlist" component={getAllRequestList} />
                <Route exact path="/donor" component={BloodRequestList} />
                <Route exact path="/userRequest" component={UserBloodRequest} />

                <Route exact path="/donorInfo" component={DonorPage} />
                <Route exact path="/requestInfo" component={RequestPage} />

                <Route exact path='/message/:id' component={MessagePage} />

            </Router>
            
        );
    }
}

const mapStateToProps  = state => ({ 
    currentUser : state.currentUser
})
const mapDispatchToProps = {
    signOutEvent
}
export default connect (mapStateToProps, mapDispatchToProps) (Header)