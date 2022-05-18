import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavHeader from '../Components/NavHeader';
const Main = ( props ) => {
    

    return (
        <main>
            <NavHeader />
            <Container>
                <Outlet />
            </Container>
        </main>
    )
}

export default Main;