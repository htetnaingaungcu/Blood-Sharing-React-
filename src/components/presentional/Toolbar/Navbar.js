import React from 'react';

const navbar = props => (
    <header>
        <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Blood-Sharing</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/donate">Donate</Nav.Link>
                                <Nav.Link href="/donate/request">Request</Nav.Link>
                                <Nav.Link href="/donor">Donor</Nav.Link>
                            </Nav>

                            <Nav className="ml-auto">
                                <Nav.Link href="/register">Register</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
    </header>
);
export default navbar;