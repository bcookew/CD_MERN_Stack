import React from 'react';
import {Link} from 'react-router-dom';

const ProductList = props => {

    const widthThirds = {width: "calc( 100% / 3 )"};

    return (
        <div className="row row-cols-auto">
            {props.products.map( (product, idx) =>
                <div key={idx} className="col-sm-6 col-md-4 col-lg-3 g-4">
                    <div className="card" style={{height: "100%"}}>
                        <h5 className="card-header">{product.name}</h5>
                        <div className="card-body">
                            <p className="card-text">{product.description}</p>
                            <h5 className="card-title">{product.price}</h5>
                        </div>
                        <div className="card-footer px-0 d-flex justify-content-evenly">
                            <Link className='btn btn-info' style={widthThirds} to={`/products/${product._id}`} >Details</Link>
                            <button className='btn btn-danger' style={widthThirds} onClick={(e, p=product) => props.onDeleteHandler(p._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductList;