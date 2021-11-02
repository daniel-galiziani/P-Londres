import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logo from '../palmeiras.png'

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                <Navbar.Brand href="/"><img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                    />   Palmeiras Londres</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto"></Nav>
                            <Nav>
                                <Nav.Link className="nav-link" href="/jogos">Jogos</Nav.Link>
                                <Nav.Link className="nav-link" href="/eventos">Eventos</Nav.Link>
                                <Nav.Link className="nav-link" href="/contato">Contato</Nav.Link>
                                <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
