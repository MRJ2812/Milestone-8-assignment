import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { lStorage, setCartFromLocal } from '../Utility/localStorage';

const Products = ({ func }) => {
    // console.log(value)
    const [apiProducts, setApiProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((response) => response.json())
            .then((data) => setApiProducts(data));
    }, [])
    useEffect(() => {

        if (apiProducts.length !== 0) {

            setCartFromLocal(apiProducts)
        }

    }, [apiProducts])



    return (
        <div className="col-9 mt-5">

            {/* Products Headder */}
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">Ultra Active Club</span>
                </a>
            </header>

            {/* Product Body */}

            <div className="container text-center">
                <div className="row">
                    {
                        apiProducts.map(product => <Product key={product.id} product={product} func={func}></Product>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Products;