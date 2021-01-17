import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/MADE_FOR_YOU/ILM/desktop_ILM_1x_650x45_madeforyou._CB416845903_.jpg" alt="adpicture" />
                <h2 className="checkout__title">Your Shopping Basket</h2>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
