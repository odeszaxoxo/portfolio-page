import React from 'react';
import './AboutContent.scss';

export const AboutContentComponent = () => {

    
    
    return (
        <div className="about-content">
            <div className="about-content__wrapper">
                <div className="about-content__row">
                    <div className="about-content__info">
                        <h1 className="about-content__title">about me</h1>
                        <h1 className="about-content__intro">I'm a front-end developer based in Saratov, Russia.</h1>
                        <p className="about-content__text">I enjoy learning new things and turning complex problems into simple beautiful and intuinive solutions.</p>
                        <div className="about-content__vk" id="vk_subscribe"></div>
                    </div>
                    <div className="about-content__photo">
                        <h1>qwejwqnheoi</h1>
                    </div>
                </div>
            </div>
            <div className="about-content__wrapper skills">
                <div className="about-content__row skills">
                    <div className="about-content__skills">
                        <h1 className="about-content__title skills">skills</h1>
                        <h2 className="about-content__item">HTML</h2>
                        <h2 className="about-content__item">CSS</h2>
                        <h2 className="about-content__item">Front-end development</h2>
                        <h2 className="about-content__item">JavaScript</h2>
                        <h2 className="about-content__item">React</h2>
                    </div>
                    <div className="about-content__interests">
                        <h1 className="about-content__title interests">interests</h1>
                        <h2 className="about-content__item">HTML</h2>
                        <h2 className="about-content__item">HTML</h2>
                        <h2 className="about-content__item">HTML</h2>
                        <h2 className="about-content__item">HTML</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}