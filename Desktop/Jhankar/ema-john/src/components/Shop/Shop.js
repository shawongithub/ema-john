import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [product, setproduct] = useState(first10)
    const [cart, setcart] = useState([])

    const handleCart = (product) => {
        const newCart = [...cart, product]
        setcart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {product.map(product => <Product product={product} key={product.key}
                    handleCart={handleCart}></Product>)}

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;