import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import "./style.scss";

export const Rating = (props:{rating:number, ratingMax?:number}) => {
    const starIcon = <FontAwesomeIcon icon={faStar} />

    const ratingMax = props.ratingMax || 5;
    const rating = props.rating || 0;
    let stars =[];
    for(let i=1; i < (ratingMax+1); i++){
        const star = <span className={`fa fa-star ${(i <= rating)?"checked":"unchecked"}`}>{starIcon}</span>;
        stars.push(star);
    }
    return <div className="star-rating-container">{stars}</div>;
}