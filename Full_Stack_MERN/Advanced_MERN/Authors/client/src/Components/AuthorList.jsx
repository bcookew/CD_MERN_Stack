import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { logMsg } from '../Accessories/LogFormatting';
import axios from 'axios';

const AuthorList = props => {

    const widthThirds = {width: "calc( 100% / 3 )"};
    const [loaded, setLoaded] = useState(false);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            console.log(logMsg("GET All Authors", true));
            setAuthors(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(logMsg(),err))
    }, []);

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(logMsg("Author Deleted", true));
                setAuthors(authors.filter( author => author._id != id))
            })
            .catch(err => console.log(logMsg(),err))
    }

    return loaded ? (
        <div className="row row-cols-auto">
            {authors.map( (author, idx) =>
                <div key={idx} className="col-sm-6 col-md-4 col-lg-3 g-4">
                    <div className="card" style={{height: "100%"}}>
                        <h5 className="card-header">{author.name}</h5>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores.</p>
                            <h5 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores.</h5>
                        </div>
                        <div className="card-footer row row-cols-2 justify-content-evenly">
                            <div className="col style={widthThirds}">
                                <Link className='btn btn-warning w-100'  to={`/edit/${author._id}`} >Edit</Link>
                            </div>
                            <div className="col style={widthThirds}">
                                <button className='btn btn-danger w-100'  onClick={(e, a=author) => onDeleteHandler(a._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
    : <h1 className="display-3 text-danger">Loading...</h1>
}

export default AuthorList;