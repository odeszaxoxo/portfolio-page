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
                    <Link to="/about" className="main-header__links link">home</Link>
                    <Link to="/about" className="main-header__links link">projects</Link>
                    <Link to="/about" className="main-header__links link">contact</Link>
                </div>
            </div>
        </div>
    );
}