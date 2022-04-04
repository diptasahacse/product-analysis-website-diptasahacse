import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <CustomLink className="nav-link" to="/">Home</CustomLink>
                        <CustomLink className="nav-link" to="/reviews">Reviews</CustomLink>
                        <CustomLink className="nav-link" to="/dashboard">Dashboard</CustomLink>
                        <CustomLink className="nav-link" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="nav-link" to="/about">About</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;