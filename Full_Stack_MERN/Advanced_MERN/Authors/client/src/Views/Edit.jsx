import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import { logMsg } from '../Accessories/LogFormatting';
import AuthorForm from '../Components/AuthorForm';

const Edit = props => {
    const {id} = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(logMsg("GET Author by Id", true), res.data);
                setAuthor(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(logMsg("Something went wrong GETting Author"), err))

    }, [])
    
    const onSubmitHandler = authorName => {
        console.log(authorName)
        axios.put(`http://localhost:8000/api/authors/${author._id}`, authorName)
        .then(res => {
            console.log(logMsg("Author Edited!", true), res)
            navigate(`/`)
        })
        .catch(err => console.log(logMsg("Error Updating Author!"), err))
    }
    return (
        !loaded ? <h1 className="display-3 text-danger">Loading...</h1> : author != null ? <AuthorForm authorName={author.name} onSubmitHandler={onSubmitHandler} conText="Edit" /> : <h1 className="display-3 text-danger">Unknown Author Id</h1>
    )
}

export default Edit;