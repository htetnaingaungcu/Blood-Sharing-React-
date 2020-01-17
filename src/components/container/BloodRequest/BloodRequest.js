import React from "react";
import { BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Carousel, Image, Card, Button, p, TabPane, TabContent } from 'react-bootstrap';
import bld_logo from '../../../assets/images/icons/bld_logo.png';
import firebase from '../../../utilites/firebase';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../actions/userActions';
import { fetchDonors } from '../../../actions/donorActions';

class BloodRequest extends React.Component {

    constructor(props) {
        super(props); 
        this.props.fetchUsers();
        this.props.fetchDonors();
    }

    handleOnClick = (event) => {
        event.preventDefault();
        const request_id = event.target.value;
        const user_id = this.props.currentUser.uid;
        const users = this.props.users;
        const user = users.find( item => item.id == user_id);
        const userData = {
            bloodType: user.bloodType,
            phone: user.phone,
            uid: user.uid,
            name: user.name
        }   
        // Insert donor to request_user
        firebase.firestore().collection('Request_User').doc(request_id).collection('Donor').doc(user_id).set(userData)
        .then( data => {
            console.log("success")
        })
        .catch( error => {
            console.log(error)
        })  

        const donorList = this.props.donors;
        const donor = donorList.find( item => item.uid == user_id);
        const donor_id = donor.id;
        const requestUser = this.props.bloodRequest;
        const requestData = {
            bloodType: requestUser.bloodType,
            phone: requestUser.phone,
            uid: requestUser.uid,
            name: requestUser.username
        }
        // Insert request to donor
        firebase.firestore().collection('Donor').doc(donor_id).collection('Request_User').doc(requestUser.uid).set(requestData)
        .then( data => {
            console.log("success")
        })
        .catch( error => {
            console.log(error)
        })

    }

  render() {
    const uid = this.props.currentUser;
    const user_id = this.props.currentUser;
    const users = this.props.users;
    const user = users.find( item => item.id == user_id);
    const donorList = this.props.donors;
    const donor = donorList.find( item => item.uid == uid);
    
    return (
      <React.Fragment>
        <Col sm={6} md={4} lg= {3}>
            <div className="cardbody fixpage mt-3">
                  
          
                      <div className='box card-color'>
                          <div className="card-body">
                              <div className="d-flex">
                                  <div className="card-title text-center">{this.props.bloodRequest.bloodType}</div>
                                  <div className="middle-line"></div>
                                  <div className="card-img text-center pt-1"><img src="https://img.icons8.com/metro/52/000000/ambulance.png"/></div>
                              </div>
                              
                              <div className="d-flex">
                                  <div className="botton-line"></div>
                                  <div className="botton-line"></div>
                              </div>
                              
                              <div className="card-content">
                                  <div className="cardname text-center mt-1"><label>{this.props.bloodRequest.username}</label></div>
                                  <Row className="cardinfo pl-3 pr-3">
                                      <Col md={4} className="">
                                          <div>
                                              <label><i>Blood bag</i></label>
                                          </div>
                                          <div><label>4</label></div>
                                      </Col>
                                      <Col md={5} className="text-center pr-4">
                                          <div>
                                              <label><i>location</i></label>
                                          </div>
                                          <div><label>{this.props.bloodRequest.loaction}</label></div>
                                      </Col>
                                      <Col md={3} className="pr-2">
                                          <div>
                                              <label><i>Case</i></label>
                                          </div>
                                          <div><label>{this.props.bloodRequest.reason}</label></div>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col  className="text-right pr-4">
                                          <label><span>29/06/2019 3:30 pm</span></label>
                                      </Col>
                                  </Row>
                              </div>
                              {donor !== undefined && user.bloodType === this.props.bloodRequest.bloodType && (   
                              <Row>
                                  <Col className="text-center"><Button className="btn_donate" onClick={this.handleOnClick} value={this.props.bloodRequest.id}>Donate</Button></Col>
                              </Row>
                              )}                                        
                          </div>
                      </div>
                
            </div>
            </Col>
      </React.Fragment>
    );
  }
}
 {/* </Row>   */}
        {/* end of cardbody fixpage */}
        {/* </Container>
        </div> */}



const mapStateToProps = state => ({
    currentUser : state.currentUser,
    users : state.users,
    donors : state.donors,
  });
const mapDispatchToProps = {
    fetchUsers,
    fetchDonors,
  }
  export default connect(mapStateToProps, mapDispatchToProps)(BloodRequest);