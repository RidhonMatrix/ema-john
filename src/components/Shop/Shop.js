import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    
    let first10=fakeData.slice(0,10);                   //slicing 10 items from object
    const [products,setProducts] = useState(first10);   //state hook
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) =>{              //event handler for add product button 
        console.log("product added",product); 
        const newCart =[...cart,product];               //add product to cart array using spread operator
        setCart(newCart);                               //setting newCart to state
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map((pd)=> <Product 
                            handleAddProduct={handleAddProduct}     //passing button function to props
                            product={pd}>
                        </Product> )
                }
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;