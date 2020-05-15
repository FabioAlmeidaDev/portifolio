import React from "react";
import "./style.scss";
import {Rating} from "../StarRating/Rating";
import {OverlayTrigger,Tooltip } from 'react-bootstrap';

export const TechTile = (props:{src:string, label?:string, tooltip?:string, rating?:number, showRating?:boolean, size?:string}) =>{
    const {src, label, rating, showRating=true, size="normal", tooltip = false} = props;
    const ratingJSX = showRating && rating? 
                <div className="tech-tile-knowledge-level">
                    <Rating rating={rating}/>
                </div>
                :
                "";

    const renderedLabel = label ? <div className="tech-tile-label">{label}</div> : "";
    return (
        tooltip ? 
        <div className={`tech-tile ` + size}>
            <div className="tech-tile-image">
            <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                <Tooltip id={`tooltip-bottom`}>
                    {tooltip}
                </Tooltip>
                }
            > 
               <img src={src} alt={label} className="pointer"/>
            </OverlayTrigger>
            </div>
            {renderedLabel}
            {ratingJSX}
        </div>
        :
        <div className={`tech-tile ` + size}>
            <div className="tech-tile-image">
               <img src={src} alt={label}/>
            </div>
            {renderedLabel}
            {ratingJSX}
        </div>       
    )
}