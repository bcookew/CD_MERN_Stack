import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavHeader = props => {
    return (
        <Navbar bg="light" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand>Team Manager!</Navbar.Brand>
                <Nav>
                    <Link className='nav-link' to='/players/list'>Player List</Link>
                    <Link className='nav-link me-3' to='/new'>Games</Link>
                    <Navbar.Brand>B C Williams | Dev</Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavHeader;