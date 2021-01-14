import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className="header__search">
                <input className="header__searchInput" type="text" name="" />
            
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOn">Hello Guest</span>
                    <span className="header__optionLineTw">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOn">Returns</span>
                    <span className="header__optionLineTw">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOn">Your</span>
                    <span className="header__optionLineTw">Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header
