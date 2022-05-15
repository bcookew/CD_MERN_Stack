import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting';
import {Col, Container, Navbar, Row} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
const Main = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log(logMsg("GET All Products", true));
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(logMsg(),err))
    }, []);

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(logMsg("Product Deleted", true));
                setProducts(products.filter( product => product._id != id))
            })
            .catch(err => console.log(logMsg(),err))
    }

    return (
        <main>
            <Navbar bg="light" expand="lg" className='mb-5'>
                <Container>
                    <Navbar.Brand>Authors!</Navbar.Brand>
                    <Navbar.Brand>B C Williams | Dev</Navbar.Brand>
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