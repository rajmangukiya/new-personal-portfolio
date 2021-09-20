import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {

    console.log(window.location.hash);


    return (
        <>
        <div className="w-100" style={{ height: '55px' }}></div>
        <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="bg-light basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Link className={`fs-6 mx-5 py-2 ${window.location.hash === '#/' ? 'text-primary' : 'text-light'
                            }`} to="/">Home</Link>
                        <Link className={`fs-6 mx-5 py-2 ${window.location.hash === '#/portfolio' ? 'text-primary' : 'text-light'
                            }`} to="/portfolio">Portfolio</Link>
                        <Link className={`fs-6 mx-5 py-2 ${window.location.hash === '#/blog' ? 'text-primary' : 'text-light'
                            }`} to="/blog">Blog</Link>
                        <Link className={`fs-6 mx-5 py-2 ${window.location.hash === '#/about' ? 'text-primary' : 'text-light'
                            }`} to="/about">About</Link>
                        <Link className={`fs-6 mx-5 py-2 ${window.location.hash === '#/contact' ? 'text-primary' : 'text-light'
                            }`} to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
