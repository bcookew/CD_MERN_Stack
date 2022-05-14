import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const Detail = props => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(`
        ----------------
        GET All Products
        ----------------
            `);
                setProduct(res.data);
            })
            .catch(err => console.log(`
        \/\/\/\/\/\/\/\/\/\/\/
        Something went wrong!
        /\/\/\/\/\/\/\/\/\/\/\
`,err))
    }, [])

    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <button className='btn btn-dark' onClick={()=>{navigate(-1)}}>Go Back</button>
            </div>
            <div className="col-auto">
                <div className="card text-center">
                    <div className="card-header">
                        {product.name}
                    </div>
                    <div className="card-body">
                        <p className="card-text">{product.description}</p>
                        <h5 className="card-title">{product.description}</h5>
                    </div>
                    <div className="card-footer">
                        <span className="text-muted">Updated: {product.updatedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;