import React, { useContext, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import PlayerContext from '../playerContext';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting'
import { useNavigate } from 'react-router-dom';

const PlayerForm = props => {
    const nav = useNavigate();
    const {playerList, setPlayerList} = useContext(PlayerContext);
    const [formData, setFormData] = useState({
        name: "",
        preferredPosi: ""
    })

    const onChangeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/new', formData)
            .then(res => {
                console.log(logMsg("Player Created Successfully", true));
                setPlayerList([...playerList, res.data]);
                nav('/players/list');
            })
    }

    return (
        <Row className='justify-content-center pt-5 mt-5'>
            <Col sm="6" className='mt-5 pt-5'>
                <Form onSubmit={onSubmitHandler}>
                    <FloatingLabel label='Name' className='mb-3'>
                        <Form.Control type="text" placeholder='Name' name='name' onChange={onChangeHandler} />
                    </FloatingLabel>
                    <FloatingLabel label='Preferred Position' className='mb-5'>
                        <Form.Control type="text" placeholder='Preferred Position' name='preferredPosi' onChange={onChangeHandler} />
                    </FloatingLabel>
                    <Button type='submit' variant='success' size='lg' >Add Player</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PlayerForm;