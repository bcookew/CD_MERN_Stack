import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import { logMsg } from '../Accessories/LogFormatting';

const Update = props => {
    const {id} = useParams();
    const [formData, setFormData] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setFormData(res.data)
                setLoaded(true);
            })
    }, []);

    const onChangeHandler = e => {
        setFormData({...formData, [e.target.name]:e.target.value })
    }
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${formData._id}`, {
            ...formData
        })
        .then(res => {
            console.log(logMsg("Product Updated!", true), res)
            navigate(`/products/${formData._id}`)
        })
        .catch(err => console.log(logMsg("Error Updating Product!"), err))
    }
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h1 className="display-3 mb-5">Update Product</h1>
                {!loaded ? <h1 className="m-5 display-3">Loading...</h1>
                : <form onSubmit={onSubmitHandler}>
                    <div className="form-floating mb-3">
                        <input placeholder='text' value={formData.name} className='form-control' type="text" name="name" onChange={(e) => onChangeHandler(e)} />
                        <label>Product Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input placeholder='text' value={formData.price} className='form-control' type="number" min="0.01" step="0.01"  name="price" onChange={(e) => onChangeHandler(e)} />
                        <label>Price</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input placeholder='text' value={formData.description} className='form-control' type="text" name="description" onChange={(e) => onChangeHandler(e)} />
                        <label>Description</label>
                    </div>
                    <div className="row justify-content-around mt-4">
                        <div className="col-auto">
                            <button className='btn btn-dark mb-2' onClick={()=>{navigate(-1)}}>Cancel</button>
                        </div>
                        <div className="col-auto">
                            <input type="submit" className='btn btn-warning' value="Update" />
                        </div>
                    </div>
                </form>}
            </div>
        </div>
    )
}

export default Update;