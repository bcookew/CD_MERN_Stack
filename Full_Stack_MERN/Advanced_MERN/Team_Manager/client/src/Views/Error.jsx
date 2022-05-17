import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Error = ( props ) => {
    
    const nav = useNavigate();

    return (
        <Col sm="auto" className='mt-5'>
            <h1 className="display-3 text-danger m-5"><em>Unknown Route</em></h1>
            <Button className='m-5' onClick={() => nav("/")}>Go Home</Button>
        </Col>
    )
}

export default Error;