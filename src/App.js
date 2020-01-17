import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import DonationForm from './components/container/DonationForm';
import DonationSecondForm from './components/container/DonationSecondForm';
import BloodRequestForm from './components/container/BloodRequestForm';
import BloodRequestList from './components/container/BloodRequestList';
import getAllRequestList from './components/container/getAllRequestList';
import Header from './containers/Header';
import Content from './containers/Content';
import Footer from './containers/Footer';
// import Carousel from './containers/Slider';

import { connect } from 'react-redux';
import * as bs from 'bootstrap/dist/css/bootstrap.min.css'
import  '../src/style.css';

import { Container, Navbar, Nav, Row, Col, Carousel, Image } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
          <Router>
                
                <Header/>
                <Content/>
                <Footer/>
                  
                    

              {/* <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route exact path="/donate" component={DonationForm} />
              <Route exact path="/donate/next" component={DonationSecondForm} /> */}
              <Route exact path="/request" component={BloodRequestForm} />
              <Route exact path="/allrequestlist" component={getAllRequestList} />

          </Router>
          
      )
  }
} 

const mapStateToProps  = state => ({ 
  currentUser : state.currentUser
})

export default connect (mapStateToProps) (App)