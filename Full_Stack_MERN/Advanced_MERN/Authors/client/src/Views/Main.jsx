import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
const Main = (props) => {
    

    return (
        <main>
            <Navbar bg="light" expand="lg" className='mb-5'>
                <Container>
                    <Navbar.Brand>Authors!</Navbar.Brand>
                    <Nav>
                        <Nav.Link><Link to='/'>Author List</Link></Nav.Link>
                        <Nav.Link><Link to='/new'>New Author</Link></Nav.Link>
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