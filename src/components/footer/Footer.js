import React from 'react';
import './Footer.scss';

export const FooterComponent = () => {
    
    return (
        <div className="main-footer">
            <div className="main-footer__wrapper">
                <div className="main-footer__copyright">
                    <p className="main-footer__copyright text">© 2019 Denis Korneev</p>
                    <a className="main-footer__link" href="https://github.com/odeszaxoxo">GITHUB</a>
                </div>
                <a className="twitter-follow-button" href="https://twitter.com/Odeszaxo" data-s>Follow @Odeszaxo</a>
            </div>
        </div>
    );
}