import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
const Main = ( props ) => {
    

    return (
        <main>
            <Navbar bg="light" expand="lg" className='mb-5'>
                <Container>
                    <Navbar.Brand>Authors!</Navbar.Brand>
                    <Nav>
                        <Link className='nav-link' to='/'>Author List</Link>
                        <Link className='nav-link' to='/new'>New Author</Link>
                        <Navbar.Brand>B C Williams | Dev</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row className='justify-content-center'>
                    <Outlet />
                </Row>
            </Container>
        </main>
    )
}

export default Main;