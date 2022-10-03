import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from '../Cart/Cart';
import { lStorage } from '../Utility/localStorage';
import "./Product.css"



const print = () => {
    console.log('Hi there')
    return (<Cart></Cart>)
}


const Product = ({ product, func }) => {
    return (
        <div className="col-4 gy-2">

            <Card style={{ width: '16rem', height: '28rem' }} className="Card">
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <h5>Time Requred:{product.time}</h5>
                    <Button variant="primary" className='cardBtn' onClick={() => lStorage(product.id)}>Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;