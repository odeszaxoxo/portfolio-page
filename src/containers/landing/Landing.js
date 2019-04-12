import React, { Component } from 'react';
import './Landing.scss';
import {HeaderComponent} from '../../components/header/Header'
import {LandingContentComponent} from '../../components/landing-content/LandingContent'
import {LandingPreviewComponent} from '../../components/landing-preview/LandingPreview'
import {FooterComponent} from '../../components/footer/Footer'

export class LandingComponent extends Component {
    
    render() {

        return (
            <div className="landing">
                <HeaderComponent></HeaderComponent>
                <LandingContentComponent></LandingContentComponent>
                <LandingPreviewComponent></LandingPreviewComponent>     
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}