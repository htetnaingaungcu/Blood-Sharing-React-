import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { insertUser } from "../../../actions/userActions";

import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Button, p, TabPane, TabContent } from 'react-bootstrap';
import regImg from '../../../assets/images/reg_img.jpg';
class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.confirm_password = React.createRef();

        this.state = {
            login: false,
            error: {}
        };
    }

    successLogin = () => {
        this.setState({
            login: true
        })
    }
    errorLogin = (error) => {
        this.setState({
            error: error
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const username = this.username.current.value;
        const password = this.password.current.value;
        const confirm_password = this.confirm_password.current.value;

        if (password === confirm_password) {

            this.props.insertUser(
                username, 
                password, 
                );

            this.setState({
                login: true
            });
        } 
        else {
			alert("No valid password and confirm password");
		} 
    };

    render() {
        console.log(this.state.login);
        if (this.state.login) return <Redirect to="/login" />;

        return (
            <div className="registerSession">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col></Col>

                        <Col md={ 5 } sm={8} className="regform">
                            <Row>
                                <Col className="text-center mt-5">
                                    <h2>Register Here</h2>
                                </Col>
                            </Row>
                            <div className="form_field">
                                <div className="    ">
                                    <Form className="form p-4" onSubmit={this.handleOnSubmit}>
                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="username">Name</label>
                                                </Col>
                                                <Col md={ 9 }>
                                                    <input id="username" className="form-control" ref={this.username} required />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="form-group">
                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="password">Password</label>
                                                </Col>

                                                <Col md={ 9 }>
                                                    <input type="password" className="form-control" placeholder=" " id="password"  ref={this.password} required/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="form-group">

                                            <Row>
                                                <Col className="text-right">
                                                    <label htmlFor="confirm_password">Confirm Password</label>
                                                </Col>
                                                

                                                <Col md={ 9 }>
                                                    <input type="password" className="form-control" ref={this.confirm_password} placeholder=" " id="confirm_password" required/>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="form-bottom text-right">
                                            <Button type="submit" className="btnreg">Register</Button>
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

const mapDispatchToProps = {
    insertUser
}

export default connect(null, mapDispatchToProps)(RegisterForm);