import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img
                src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
                alt="" />
            <div className="header__search">
                <input
                    className="header__searchInput" type="text" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span
                        className="header__optionLineOne">Hello Maharsh</span>
                    <span
                        className="header__optionLineTwo">SignIN</span>
                </div>
                <div className="header__option">
                    <span
                        className="header__optionLineOne">Returns</span>
                    <span
                        className="header__optionLineTwo">&Orders</span>
                </div>
                <div className="header__option">
                    <span
                        className="header__optionLineOne">Your</span>
                    <span
                        className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__option">
                    <span
                        className="header__optionLineOne"></span>
                </div>
            </div>
        </div>
    )
}

export default Header;
