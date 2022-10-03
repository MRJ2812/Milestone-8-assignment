import React from 'react';
import Button from 'react-bootstrap/Button';
import './Cart.css'

const Cart = (props) => {

    // console.log("Cart")
    return (
        <div>
            <h3>Total Add :{props.value}</h3>
            <h4 className='mt-5'>Add a break</h4>
            <div className='mt-3'>
                <Button variant="outline-info me-2">10s</Button>
                <Button variant="outline-info me-2">15s</Button>
                <Button variant="outline-info me-2">20s</Button>
                <Button variant="outline-info">30s</Button>
            </div>
            <div className='Cart-text mt-3'>
                <h3>Excersize Time: </h3>
                <h3>Break Time :</h3>
            </div>
        </div>

    );
};

export default Cart;