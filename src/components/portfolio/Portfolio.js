import React from 'react';
import './Portfolio.scss'; 
import {PortfolioItemComponent} from "../portfolioItem/PortfolioItem";
import img1 from "../../assets/edgenode.jpg";

export const PortfolioComponent = () => {
    
    return (
        <div className="portfolio">
            <PortfolioItemComponent title="EDGENODE" link="https://edgenode-frontend.herokuapp.com" image={img1} text="A dynamic search engine for the world of education and research." type="Website" skill="React"></PortfolioItemComponent>
            <PortfolioItemComponent title="EDGENODE" link="https://edgenode-frontend.herokuapp.com" image={img1} text="A dynamic search engine for the world of education and research." type="Website" skill="React"></PortfolioItemComponent>
            <PortfolioItemComponent title="EDGENODE" link="https://edgenode-frontend.herokuapp.com" image={img1} text="A dynamic search engine for the world of education and research." type="Website" skill="React"></PortfolioItemComponent>
        </div>
    );
}