import React from "react";
import "./style.scss";
import {Rating} from "../StarRating/Rating";
import {OverlayTrigger,Tooltip } from 'react-bootstrap';

export const TechTile = (props:{src:string, label:string, rating:number, showRating:boolean, size:string}) =>{
    const {src, label, rating, showRating=true, size="normal"} = props;
    const ratingJSX = showRating && rating? 
                <div className="tech-tile-knowledge-level">
                    <Rating rating={rating}/>
                </div>
                :
                "";

    return (
        <div className={`tech-tile ` + size}>
            <div className="tech-tile-image">
            <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                <Tooltip id={`tooltip-bottom`}>
                    {label}
                </Tooltip>
                }
            > 
               <img src={src} alt={label}/>
            </OverlayTrigger>
            </div>
            <div className="tech-tile-label">
                {label}
            </div>
            {ratingJSX}
        </div>
    )
}