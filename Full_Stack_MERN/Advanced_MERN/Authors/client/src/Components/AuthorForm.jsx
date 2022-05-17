import React, {useState} from 'react';
import axios from 'axios';
import { Button, Col, FloatingLabel, Form, FormFloating } from 'react-bootstrap';

const AuthorForm = props => {
    
    const [authorName, setAuthorName] = useState(props.authorName ? props.authorName : "");
    const onAddHandler = (e, authName) => {
        
        e.preventDefault();
        props.onSubmitHandler({name: authorName});
        setAuthorName("")
    }
    return (
        <Col sm="6">
            <h1 className="display-3 mb-5">{props.conText} Author</h1>
            <Form onSubmit={onAddHandler}>
                <FloatingLabel label="Author Name" className='mb-3'>
                    <Form.Control placeholder='text' value={authorName} className='form-control' type="text" name="name" onInput={(e) => setAuthorName(e.target.value)} />
                    <span className="help-text text-danger">{props.errors && props.errors.name.properties.message }</span>
                </FloatingLabel>
                <Button variant='success' size='lg' type='submit'>{props.conText} Author</Button>
            </Form>
        </Col>
    )
}

export default AuthorForm;