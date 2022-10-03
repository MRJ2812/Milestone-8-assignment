import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { lStorage, setCartFromLocal } from '../Utility/localStorage';
import './Shop.css'


let countArray = []
const Shop = () => {
    const [totaladd, setTotalAdd] = useState([]);

    const check = (x) => {
        countArray = [...totaladd, x]
        setTotalAdd(countArray);

    }

    return (
        <div className="container text-center ">
            <div className="row">

                {/* Products Div */}
                <Products func={check}></Products>

                <div className="col-3 sticky-top">
                    <Cart value={totaladd.length}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Shop;