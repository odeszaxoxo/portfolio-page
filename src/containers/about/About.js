import React, { Component } from 'react';
import './About.scss';
import {HeaderComponent} from '../../components/header/Header'
import {FooterComponent} from '../../components/footer/Footer'
import {AboutContentComponent} from '../../components/about-content/AboutContent'

export class AboutComponent extends Component {
    
    render() {

        return (
            <div className="about">
                <HeaderComponent></HeaderComponent> 
                <AboutContentComponent></AboutContentComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}