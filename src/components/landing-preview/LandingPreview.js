import React from 'react';
import './LandingPreview.scss';
import { Link } from "react-router-dom";

export const LandingPreviewComponent = () => {
    
    return (
        <div className="main-preview">
            <div className="main-preview__content">
                <div className="main-preview__content header">
                    <div className="main-preview__content header__line"></div>
                    <h1 className="main-preview__content header__title">SOME OF MY LATEST WORK</h1>
                    <div className="main-preview__content header__line"></div>
                </div>
            </div>
        </div>
    );
}