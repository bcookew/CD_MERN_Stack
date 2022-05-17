import React, { useState } from 'react';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting';
import AuthorForm from '../Components/AuthorForm';

const New = props => {
    const [errors, setErrors] = useState()
    const onSubmitHandler = (authorName) => {
        axios.post('http://localhost:8000/api/authors/new', authorName)
        .then(res => {
            console.log(logMsg("Author Added Successfully!", true))
        })
        .catch(err => {
            console.log(logMsg(), err)
            setErrors({...err.response.data.errors})
        })
    }
    return (
        <AuthorForm errors={errors} onSubmitHandler={onSubmitHandler} conText="Add" />
    )
}

export default New;