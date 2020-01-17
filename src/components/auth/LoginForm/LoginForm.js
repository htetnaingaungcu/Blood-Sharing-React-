import React from 'react';
import { BrowserRouter as Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { loginUserEvent,fetchUsers } from '../../../actions/userActions';
import firebase from '../../../utilites/firebase';

import { Container, Row, Col, Navbar, Nav, NavDropdown, NavItem, Form, Button, p, TabPane, TabContent } from 'react-bootstrap';
import regImg from '../../../assets/images/reg_img.jpg';

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.username = React.createRef();
		this.password = React.createRef();
		this.props.fetchUsers();

		this.state = {
			redirectToReferrer : false,
			error: {},
		};
	}

	successLogin = () => {
        this.setState({
            redirectToReferrer: true
        })
    }
    errorLogin = (error) => {
        this.setState({
            error: error
        })
    }

	handleOnSubmit = (event) => {
		event.preventDefault();

		const email = this.username.current.value;
		const password = this.password.current.value;

		this.props.loginUserEvent(
            this.username.current.value,
            this.password.current.value,
            this.successLogin,
            this.errorLogin
        );
	}

	render() {

		if (this.state.redirectToReferrer) return <Redirect to="/" />;

		return (
			<div className="registerSession">
				<Container>
					<Row>
					<Col></Col>
					<Col></Col>

					<Col md={ 5 } className="regform">
							<Row>
								<Col className="text-center mt-5 mb-4">
									<h2>Login Here</h2>
								</Col>
							</Row>
							<div className="form_field">
								<div className="">
									<Form className="form" onSubmit={this.handleOnSubmit}>
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
													<input type="password" className="form-control" id="password"  ref={this.password} required/>
												</Col>
											</Row>
										</div>
										
										<div className="form-bottom text-right">
											<Button type="submit" className="btnreg">Login</Button>
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

const mapStateToProps = (state) => ({
	users : state.users  
});
  
const mapDispatchToProps = {
	loginUserEvent,
	fetchUsers
}
  
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)