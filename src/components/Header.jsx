import React, { } from 'react';
import logo from "./pictures/LogoAIP.png"
import "../styles/header.css"

const Header = () => {
    return (

        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <img src={logo} className='logo-nav' />
                    <nav className="header-nav">
                        <a href="#" className='header-nav-link'>о компании</a>
                        <a href="#" className='header-nav-link'>услуги</a>
                        <a href="#" className='header-nav-link'>проекты</a>
                        <a href="#" className='header-nav-link'>контакты</a>
                    </nav>
                    <button className='header-button button'>свяжитесь с нами</button>
                </div>
            </div>
        </header>
    )
}

export default Header;