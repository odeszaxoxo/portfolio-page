import React, { Component } from 'react';
import './Landing.scss';
import {HeaderComponent} from '../../components/header/Header'
import {LandingContentComponent} from '../../components/landing-content/LandingContent'
import {FooterComponent} from '../../components/footer/Footer'
import {PortfolioComponent} from '../../components/portfolio/Portfolio'

export class LandingComponent extends Component {
    
    render() {

        return (
            <div className="landing">
                <HeaderComponent></HeaderComponent>
                <LandingContentComponent></LandingContentComponent>
                <PortfolioComponent></PortfolioComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}