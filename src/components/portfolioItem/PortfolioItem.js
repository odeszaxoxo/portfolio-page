import React, {Component} from 'react';
import './PortfolioItem.scss';

export class PortfolioItemComponent extends Component {
    
    render (props) {
    return (
            <div className="portfolio-item">
                <div className="portfolio-item__wrapper">
                    <img className="portfolio-item__image" src={this.props.image} alt=""></img>
                    <div className="portfolio-item__description">
                        <a className="portfolio-item__title" href={this.props.link}>{this.props.title}</a>
                        <p className="portfolio-item__text">{this.props.text}</p>
                        <ul className="portfolio-item__skills">
                            <li className="portfolio-item__skill">{this.props.type}</li>
                            <li className="portfolio-item__skill">{this.props.skill}</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
    }
}