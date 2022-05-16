import React from 'react';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting';
import AuthorForm from '../Components/AuthorForm';

const New = props => {
    
    const onSubmitHandler = (authorName) => {
        axios.post('http://localhost:8000/api/authors/new', authorName)
        .then(res => {
            console.log(logMsg("Author Added Successfully!", true), res)
        })
        .catch(err => console.log(logMsg(), err, authorName))
    }
    return (
        <AuthorForm onSubmitHandler={onSubmitHandler} conText="Add" />
    )
}

export default New;