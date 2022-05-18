import React from 'react';
import { Col, FloatingLabel, Form, FormControl, Row } from 'react-bootstrap';

const PlayerForm = props => {
    return (
        <Row className='justify-content-center'>
            <Col sm="auto">
                <Form>
                    <FloatingLabel>
                        <FormControl />
                    </FloatingLabel>
                </Form>
            </Col>
        </Row>
    )
}

export default PlayerForm;