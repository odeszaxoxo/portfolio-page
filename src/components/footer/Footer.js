import React from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";

export const FooterComponent = () => {
    
    return (
        <div className="main-footer">
            <div className="main-footer__wrapper">
                <div className="main-footer__copyright">
                    <p className="main-footer__copyright text">© 2019 Denis Korneev</p>
                </div>
                <div className="main-footer__links">
                    <Link to="/about" className="main-footer__links link">about</Link>
                    <Link to="/featured" className="main-footer__links link">featured</Link>
                    <Link to="/portfolio" className="main-footer__links link">portfolio</Link>
                </div>
                <a className="twitter-follow-button" href="https://twitter.com/Odeszaxo" data-s>Follow @Odeszaxo</a>
            </div>
        </div>
    );
}