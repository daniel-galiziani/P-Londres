import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar  expand="lg" className='navbar' navbar-dark collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Palmeiras Londres</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/login"><i className='fas fa-user'></i>  Sign In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    )
}

export default Header
