import React, { Component } from 'react';
import './Landing.scss';
import {HeaderComponent} from '../../components/header/Header'

export class LandingComponent extends Component {
    
    render() {

        return (
            <div className="landing">
                <HeaderComponent></HeaderComponent>     
            </div>
        );
    }
}