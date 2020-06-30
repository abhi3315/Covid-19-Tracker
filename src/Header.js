import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Covid-19 <span style={{ color: "rgb(226, 13, 2)" }}>Tracker</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href='/'>Global</Nav.Link>
                    <Nav.Link href='/india'>India</Nav.Link>
                    <Nav.Link href='/india/district'>Indian District</Nav.Link>
                    <Nav.Link href='/india/cases'>Indian Cases Statistics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header