import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product) => total + product.price, 0)

    const fixedNumber = (num) => {
        const number = num.toFixed(2)
        return Number(number)
    }
    return (
        <div>
            <h4>No of items: {cart.length}</h4>
            <p>Total cost:{fixedNumber(total)}</p>
        </div>
    );
};

export default Cart;