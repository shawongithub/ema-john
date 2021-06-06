import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />

const Product = (props) => {
    console.log(props)
    const { img, name } = props.product
    return (
        <div className="product">
            <div >
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <button className="buy-button" onClick={() => props.handleCart(props.product)}>{element}add to cart</button>
            </div>

        </div>
    );
};

export default Product;