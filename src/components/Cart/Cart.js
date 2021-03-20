import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart=props.cart;
    const totalPrice = cart.reduce( (total,prd) => total+prd.price,0 );

    let shipping = 0;
    if(totalPrice>35){
        shipping = 0;
    }
    else if(totalPrice>15){
        shipping = 4.99;
    }
    else shipping = 12.99;

    const tax= (totalPrice /10).toFixed(2);

    const primeTotal= (totalPrice+shipping+Number(tax)).toFixed(2);
    
    return (
        <div className="cart-body">
            <h3 >Order Summary</h3>
            <h4 >Items ordered: {props.cart.length}</h4>
            <p><small>Items:    ${totalPrice.toFixed(2)}</small></p>
            <p><small>Shipping & Handling: ${tax}</small></p>
            <p><small>Total before tax: ${(shipping+totalPrice).toFixed(2)}</small></p>
            <p><small>Estimated Tax: ${tax}</small></p>
            <p className="total">Order Total: ${primeTotal}</p>

        </div>
    );
};

export default Cart;