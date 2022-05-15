import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList';
import { logMsg } from '../Accessories/LogFormatting';

const Main = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log(logMsg("GET All Products", true));
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(logMsg(),err))
    }, []);

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(logMsg("Product Deleted", true));
                setProducts(products.filter( product => product._id != id))
            })
            .catch(err => console.log(logMsg(),err))
    }

    return (
        <div className="row">
            <div className="row justify-content-center mb-5">
                <ProductForm products={products} setProducts={setProducts} />
            </div>
            <hr />
            <div className="row justify-content-center">
                {loaded ? <ProductList products={products} onDeleteHandler={onDeleteHandler} /> : <h2 className="display-3">Loading...</h2> }
            </div>
        </div>
        

    )
}

export default Main;