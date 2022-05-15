import React, {useState} from 'react';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting';
import { Button, Col, FloatingLabel, Form, FormFloating } from 'react-bootstrap';

const AuthorForm = props => {
    
    const [authorName, setAuthorName] = useState(props.authorName ? props.authorName : "");
    
    return (
        <Col sm="6">
            <h1 className="display-3 mb-5">Add New Author</h1>
            <Form onSubmit={(e, authorName) => props.onSubmitHandler(authorName)}>
                <FloatingLabel label="Author Name" className='mb-3'>
                    <Form.Control placeholder='text' value={authorName} className='form-control' type="text" name="name" onInput={(e) => setAuthorName(e.target.value)} />
                </FloatingLabel>
                <Button variant='success' size='lg' type='submit'>Add Author</Button>
            </Form>
        </Col>
    )
}

export default AuthorForm;