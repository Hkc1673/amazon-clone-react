import React from 'react';
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19,99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg" alt="book" />
            <button>Add to Basket</button>
        </div>
    )

}

export default Product;
