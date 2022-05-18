import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Players = props => {
    return (
        <>
            <Row className='justify-content-start'>
                <Col sm='auto'>
                    <Nav>
                        <Link className='display-6' to='/players/list'>List</Link>
                        <span className="display-6"> | </span>
                        <Link className='display-6' to='/players/addplayer'>Add Player</Link>
                    </Nav>
                </Col>
            </Row>
            <Outlet />
        </>
    )
}

export default Players;