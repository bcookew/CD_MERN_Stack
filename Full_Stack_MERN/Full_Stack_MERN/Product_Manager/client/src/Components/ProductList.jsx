import React from 'react';
import {Link} from 'react-router-dom';

const ProductList = props => {
    return (
        <div className="row row-cols-auto">
            {props.products.map( (product, idx) =>
                <div key={idx} className="col-sm-6 col-md-4 col-lg-3 g-4">
                    <div className="card">
                        <h5 className="card-header">{product.name}</h5>
                        <div className="card-body">
                            <p className="card-text">{product.description}</p>
                            <h5 className="card-title">{product.price}</h5>
                        </div>
                        <div className="card-footer">
                            <Link className='btn btn-info' to={`/products/${product._id}`} >Details</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductList;