import React from 'react';
import './LandingContent.scss';

export const LandingContentComponent = () => {
    
    return (
        <div className="main-content">
            <div className="main-content__description">
                <h1 className="main-content__title">Front-end Web Developer.</h1>
                <p className="main-content__text">I'm a product designer based in Saratov, Russia. 
                                                  I enjoy turning complex problems into simple, beautiful and intuitive designs.
                                                  If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me <a className="main-content__link" href="vk.com">here.</a></p>
                <div className="main-content__buttons">
                    <button className="main-content__button">I need a website</button>
                    <button className="main-content__button">I'm looking to hire</button>
                </div>
            </div>
        </div>
    );
}