import React from "react";
import { BrowserRouter as  Link,Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { insertDonor, fetchDonors } from "../../../actions/donorActions";
import { updateUser } from "../../../actions/userActions";

import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Button, p, TabPane, TabContent } from 'react-bootstrap';
import regImg from '../../../assets/images/reg_img.jpg';

class DonationForm extends React.Component {
    constructor(props) {
        super(props);
        //this.props.fetchDonors();
        this.name = React.createRef();
        this.phone = React.createRef();
        this.dob = React.createRef();
        this.locaion = React.createRef();
        
        this.state = {
            gender: 'male',
            bloodType: 'A',
            completeDonationForm: false
        };
    }

    genderOnChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    bloodTypeOnChange = (event) => {
        this.setState({
            bloodType: event.target.value
        })
    }    

    handleOnSubmit = event => {
        event.preventDefault();

        const donor = {
            username: this.props.currentUser.email,
            uid: this.props.currentUser.uid,
        }

        //const donorData = this.props.donors.find( data => data.uid === donor.uid && data.username === donor.username);
        const user_id = this.props.currentUser.uid;
        const user = {
            name: this.name.current.value,
            phone: this.phone.current.value,
            bloodType: this.state.bloodType,
            dateOfBirth: this.dob.current.value,
            gender: this.state.gender,
            location: this.location.current.locaion,           
        }

        this.props.insertDonor(donor); 
        this.props.updateUser(user, user_id);

        this.setState({
            completeDonationForm: true
        });
    };

    render() {
        if (this.state.completeDonationForm) return <Redirect to="/donate/next" />;

        return (
            <div className="registerSession">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>  </Col>

                        <Col md={ 5 } sm={8} className="regform">
                            <Row>
                                <Col className="text-center ">
                                    <h2>Donation</h2>
                                </Col>
                            </Row>

                            <div className="form_field">
                                <div className="">
                                    <Form className="form p-4" onSubmit={this.handleOnSubmit}>
                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label for="name">Name</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="name" className="form-control" ref={this.name} required />
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label for="phone">Phone No</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="phone" className="form-control" ref={this.phone} required />
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label for="dob">Date of Birth</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="dob" className="form-control" ref={this.dob} required />
                                                </Col>
                                            </Row>
                                        </div>


                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label for="bloodType">Please select your blood group</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <Row className="pl-3">
                                                        <input type="button" value="A" checked={this.state.bloodType === "A"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>

                                                        <input type="button" value="A+" checked={this.state.bloodType === "A+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType" />

                                                        <input type="button" value="B" checked={this.state.bloodType === "B"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType" />

                                                        <input type="button" value="B+" checked={this.state.bloodType === "B+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType" />

                                                    </Row>

                                                    
                                                    <Row className="pl-3">
                                                        <input type="button" value="O" checked={this.state.bloodType === "O"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType" />

                                                        <input type="button" value="O+" checked={this.state.bloodType === "O+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType" />
                                
                                                        <input type="button" value="AB" checked={this.state.bloodType === "AB"}
                                                            onChange={this.genderOnChanlick} className="btn_bloodType" />
                                                        
                                                        <input type="button" value="AB+" checked={this.state.bloodType === "AB+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType" />

                                                           {/*  <Button className="btn_bloodType">O +</Button>
                                                            <Button className="btn_bloodType">O </Button>
                                                            <Button className="btn_bloodType">AB +</Button>
                                                            <Button className="btn_bloodType">AB </Button> */}
                                                    </Row>                
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label for="location">Location</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="location" className="form-control" ref={this.location} required />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="form-bottom text-right">
                                            <Button type="submit" className="btnreg">Submit</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser : state.currentUser,
    //donors: state.donors
})

const mapDispatchToProps = {
    insertDonor,
    updateUser,
    //fetchDonors
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);