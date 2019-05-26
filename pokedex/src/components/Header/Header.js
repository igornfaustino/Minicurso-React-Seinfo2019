import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"

import "./header.css"

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={require("../../images/pokemon-logo.png")}
                                height="50"
                                className="d-inline-block align-top"
                                alt="Pokemon logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Link to="/historico" className="link">Histórico</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header
