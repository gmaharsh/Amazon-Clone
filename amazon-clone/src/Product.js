import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Lenovo - IdeaPad L340 15 Gaming Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB Solid State Drive - Black</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>648</strong>
                </div>
                <div className="product__rating">
                    <p></p>
                </div>  
            </div>
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg" alt="" />
            
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
