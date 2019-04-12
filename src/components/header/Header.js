import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import logo from '../../assets/lisp.png'

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header__wrapper">
                <Link to="/"><img src={logo} className="main-header__logo" alt=""></img></Link>
                <div className="main-header__links">
                    <Link to="/about" className="main-header__links link">about</Link>
                    <Link to="/featured" className="main-header__links link">featured</Link>
                    <Link to="/portfolio" className="main-header__links link">portfolio</Link>
                </div>
                <div className="main-header__social">
                    <Link className="main-header__social link"><i className="fas fa-envelope"></i></Link>
                    <Link className="main-header__social link"><i className="fab fa-twitter"></i></Link>
                    <Link className="main-header__social link"><i className="fab fa-instagram"></i></Link>
                    <Link className="main-header__social link"><i className="fab fa-vk"></i></Link>
                </div>
            </div>
        </div>
    );
}