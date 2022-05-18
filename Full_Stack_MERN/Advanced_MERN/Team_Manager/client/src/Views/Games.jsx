import React from 'react';
import { Row, Nav, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

const Games = props => {

    return (
        <>
            <Row className='my-5 py-5 justify-content-center'>
                <Col sm='auto'>
                    <Nav>
                        <Link className='display-6' to='1'>Game 1</Link>
                        <span className="display-6"> | </span>
                        <Link className='display-6' to='2'>Game 2</Link>
                        <span className="display-6"> | </span>
                        <Link className='display-6' to='3'>Game 3</Link>
                    </Nav>
                </Col>
            </Row>
            <Outlet />
        </>
    )
}
export default Games;