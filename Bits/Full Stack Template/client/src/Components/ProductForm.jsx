import React, {useState} from 'react';
import axios from 'axios';
import { logMsg } from '../Accessories/LogFormatting';

const ProductForm = props => {
    
    const resetForm = () => {return {
        name: "",
        price: "",
        description: ""
    } }

    const [formData, setFormData] = useState(props.form ? props.form : resetForm);    

    const onChangeHandler = e => {
        setFormData({...formData, [e.target.name]:e.target.value })
    }
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
        <div className="col-6">
            <h1 className="display-3 mb-5">Add New Product</h1>
            <form onSubmit={onSubmitHandler}>
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
                <input type="submit" className='btn btn-success btn-lg' value="Add" />
            </form>
        </div>
    )
}

export default ProductForm;