import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

import { fetchDonors } from '../../../actions/donorActions';

import BloodRequestList from '../BloodRequestList';

import { connect } from "react-redux";
import { Col, Row, Figure, Container } from "react-bootstrap";

class DonorPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchDonors();
        
    }
    render() {
        const uid = this.props.currentUser.uid;
        const donorList = this.props.donors;
        const donor = donorList.find( item => item.uid == uid);

        if(donor != undefined) {
            return <BloodRequestList />
        }
        else{
            return (
                <React.Fragment>
                    <Row>
                        <div className="donorimg">
                            <img src="https://stmed.net/sites/default/files/blood-donor-month-wallpapers-28330-6431860.jpg"></img>
                        </div>
                    </Row>
                    <Container>
                        <Row>
                            <Col className="btnDonate">
                                <Link to="/donate"><button>REGISTER AS DONOR</button></Link>
                            </Col>                        
                        </Row>
                        <Row>
                            <Col lg={ 12 }  md={ 12 } xs= {12} className="step-title">
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
                    
                </React.Fragment>
            );
        }
        
    }
}

const mapStateToProps  = state => ({ 
    currentUser : state.currentUser,
    donors : state.donors
})

const mapDispatchToProps = {
    fetchDonors
}
  
export default connect (mapStateToProps, mapDispatchToProps) (DonorPage)