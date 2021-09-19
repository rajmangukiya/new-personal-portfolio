import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {

    console.log(window.location.pathname === '/');


    return (
        <>
        <div className="w-100" style={{ height: '55px' }}></div>
        <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="bg-light basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className={`fs-6 mx-5 ${window.location.pathname === '/' ? 'text-primary' : 'text-light'
                            }`} href="/new-personal-portfolio">Home</Nav.Link>
                        <Nav.Link className={`fs-6 mx-5 ${window.location.pathname === '/portfolio' ? 'text-primary' : 'text-light'
                            }`} href="/new-personal-portfolio/portfolio">Portfolio</Nav.Link>
                        <Nav.Link className={`fs-6 mx-5 ${window.location.pathname === '/blog' ? 'text-primary' : 'text-light'
                            }`} href="/new-personal-portfolio/blog">Blog</Nav.Link>
                        <Nav.Link className={`fs-6 mx-5 ${window.location.pathname === '/about' ? 'text-primary' : 'text-light'
                            }`} href="/new-personal-portfolio/about">About</Nav.Link>
                        <Nav.Link className={`fs-6 mx-5 ${window.location.pathname === '/contact' ? 'text-primary' : 'text-light'
                            }`} href="/new-personal-portfolio/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
