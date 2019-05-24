import React from 'react';
import './Contact.scss';
import { Link } from "react-router-dom";
import logo from '../../assets/lisp.png'

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header__wrapper">
                <Link to="/"><img src={logo} className="main-header__logo" alt=""></img></Link>
                <div className="main-header__links">
                    <Link to="/about" className="main-header__links link">about</Link>
                </div>
                <div className="main-header__social">
                    <a href="mailto:krnvdns@outlook.com" className="main-header__social link"><i className="fas fa-envelope"></i></a>
                    <a href="https://twitter.com/Odeszaxo" className="main-header__social link"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/_yanni.tsunami_/" className="main-header__social link"><i className="fab fa-instagram"></i></a>
                    <a href="https://vk.com/odeszaxo" className="main-header__social link"><i className="fab fa-vk"></i></a>
                </div>
            </div>
        </div>
    );
}