import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../Components/ProductForm'

const Main = (props) => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        axios.get('http://localhost:8000/api')
        .then(res => 
            setMessage(res.data.message))
        .catch(err => console.log(`
Something went wrong!

`,err))
    }, [])
    return (
        <div className="row">
            <div className="col text-center">
                <h1>{message}</h1>
            </div>
            <div className="row justify-content-center">
                <ProductForm />
            </div>
        </div>
        

    )
}

export default Main;