import React from 'react';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting';
import AuthorForm from '../Components/AuthorForm';

const New = props => {
    
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product/new', {
            ...formData
        })
        .then(res => {
            console.log(logMsg("Product Added Successfully!", true), res)
            props.setProducts([...props.products, res.data])
            resetForm();
        })
        .catch(err => console.log(logMsg(), err))
    }
    return (
        <AuthorForm onSubmitHandler={onSubmitHandler} />
    )
}

export default New;