import React from "react";
import {TechTile} from "../TechTile/TechTile";
import "./style.scss";

export const Project =(props:any)=>{
    const {title, role, date, "image-src":imageSrc,company, companyLogo, "tech-stack":techStack=[], children, id} = props;

    
    return(
        <div className="project-container" id={id}>
            <div className="project-image-tech d-xs-none">
                <div className="project-image">
                    <img src={imageSrc}/>
                </div>
            </div>
            <div className="project-description">
                <div className="project-description-title">{title}</div>
                <div className="project-description-role">{role}, {date}</div>
                <div className="project-description-company">{company}</div>
                {buildTechStack(techStack)}
                <div className="project-description-description">{children}</div>

            </div>
        </div>
    )
}

const buildTechStack =(techStack:[{src:string,label?:string, tooltip?:string}])=>{
    const techStackArray = [];
    for(let i=0; i < techStack.length; i++){
        techStackArray.push(<TechTile key={i} src={techStack[i].src} label={techStack[i].label} tooltip={techStack[i].tooltip} size="x-small"/>);
    }
    const techStackContainer = techStackArray.length > 0 ? 
    <div>
        <div className="tech-stack">Tech Stack:</div>
        <div className="project-tech">
            {techStackArray}
        </div>  
    </div> : "";
    return techStackContainer;
}