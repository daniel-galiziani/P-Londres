import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../palmeiras.png'

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                <LinkContainer to='/'>    
                    <Navbar.Brand><img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                    />   Palmeiras Londres</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto"></Nav>
                            <Nav>
                            <LinkContainer to='/jogos'>
                                <Nav.Link className="nav-link">Jogos</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/eventos'>
                                <Nav.Link className="nav-link">Eventos</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contato'>
                                <Nav.Link className="nav-link">Contato</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link className="nav-link">Login</Nav.Link>
                            </LinkContainer>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
