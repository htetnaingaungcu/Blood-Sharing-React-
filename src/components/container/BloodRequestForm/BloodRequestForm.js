import React from "react";
import { BrowserRouter as  Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { insertBloodRequest } from "../../../actions/bloodRequestActions";

import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Button, p, TabPane, TabContent } from 'react-bootstrap';
import regImg from '../../../assets/images/reg_img.jpg';

class BloodRequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.bloodCount = React.createRef();
        this.name = React.createRef();
        this.phone = React.createRef();
        this.reason = React.createRef();        
        
        this.state = {
            bloodType: 'A',
            location: '500-bed Specialty Hospital, Yangon',
            status: 'urgent',
            completeBloodRequest: false
        };
    }

    bloodTypeOnChange = (event) => {
        this.setState({
            bloodType: event.target.value
        })
        console.log(event.target.value);
    }

    locationOnChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    statusOnChange = (event) => {
        this.setState({
            status: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();

        const newBloodRequest = {
            bloodCount: this.bloodCount.current.value,
            bloodType: this.state.bloodType,
            location: this.state.location,
            numOfDonor: '',
            numOfViewer: '',
            name: this.name.current.value,
            phone: this.phone.current.value,
            reason: this.reason.current.value,
            requestDate: new Date('dd/MM/YY'),
            uid: this.props.currentUser.uid,
            username: this.props.currentUser.email,                     
        };

        this.props.insertBloodRequest(newBloodRequest); 

        this.setState({
            completeBloodRequest: true
        });   
    };

    render() {
        //console.log(this.state.completeBloodRequest);
        if (this.state.completeBloodRequest) return <Redirect to="/allrequestlist" />;

        return (

            <div className="registerSession pt-5">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col >
                           
                        </Col>

                        <Col md={ 5 } sm={8} className="regform\">
                            <Row>
                                <Col className="text-center">
                                    <h2>Blood Request Form</h2>
                                </Col>
                            </Row>

                            <div className="form_field">
                                <div className="">
                                    <Form className="form p-4" onSubmit={this.handleOnSubmit}>
                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="name">Name</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="name" className="form-control" ref={this.name} required />
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="phone">Phone No</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="phone" className="form-control" ref={this.phone} required />
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="bloodType">Please select your blood group</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <Row className="pl-3">
                                                        <input type="button" value="A" checked={this.state.bloodType === "A"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>

                                                        <input type="button" value="A+" checked={this.state.bloodType === "A+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>

                                                        <input type="button" value="B" checked={this.state.bloodType === "B"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>

                                                        <input type="button" value="B+" checked={this.state.bloodType === "B+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>
                                                    </Row>

                                                    <Row className="pl-3">
                                                        <input type="button" value="O" checked={this.state.bloodType === "O"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>

                                                        <input type="button" value="O+" checked={this.state.bloodType === "O+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>
                                
                                                        <input type="button" value="AB" checked={this.state.bloodType === "AB"}
                                                            onChange={this.genderOnChanlick} className="btn_bloodType"/>
                                                        
                                                        <input type="button" value="AB+" checked={this.state.bloodType === "AB+"}
                                                            onChange={this.bloodTypeOnClick} className="btn_bloodType"/>
                                                    </Row>                
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="bloodcount">Blood Count</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input type="number" min="0" className="form-control w-50" id="bloodCount" ref={this.bloodCount} required />
                                                </Col>
                                            </Row>
                                        </div>                                        

                                        <div className="form-group">
                                            <Row>            
                                                <Col className="text-right">
                                                    <label htmlFor="location">Location</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <select id="location" className="form-control" onChange={this.locationOnChange}>
                                                        <option value="500-bed Specialty Hospital, Yangon">500-bed Specialty Hospital, Yangon</option>
                                                        <option value="Defence Services General Hospital (1000-bed)">Defence Services General Hospital (1000-bed)</option>
                                                        <option value="Defence Services Orthopaedic Hospital (500-Bed)">Defence Services Orthopaedic Hospital (500-Bed)</option>
                                                        <option value="Defence Services Obstetric, Gynaecological and Paediatric Hospital">Defence Services Obstetric, Gynaecological and Paediatric Hospital</option>
                                                        
                                                    </select>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="reason">Reason</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="phone" className="form-control" ref={this.reason} required />
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="status">Status</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    
                                                    <input type="radio" value="urgent" checked={this.state.status === "urgent"}
                                                            onChange={this.statusOnChange} /><label className="mr-3" htmlFor="Urgent">Urgent</label>

                                                    <input type="radio" value="normal" checked={this.state.status === "normal"}
                                                    onChange={this.statusOnChange} /><label className="mr-3" htmlFor="Normal">Normal</label>
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
    currentUser : state.currentUser
})

const mapDispatchToProps = {
    insertBloodRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(BloodRequestForm);