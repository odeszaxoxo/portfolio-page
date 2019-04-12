import React from 'react';
import './LandingContent.scss';
import { Link } from "react-router-dom";

export const LandingContentComponent = () => {
    
    return (
        <div className="main-content">
            <div className="main-content__description">
                <h1 className="main-content__description title">CODER</h1>
                <p className="main-content__description text">Front End Developer who focuses on writing clean, elegant and efficient code.</p>
            </div>
        </div>
    );
}