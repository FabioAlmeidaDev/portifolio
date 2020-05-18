import React from 'react';
import Button from 'react-bootstrap/Button';

// Components
import {Introduction} from "./components/Introduction/Introduction";
import {SectionTitle} from "./components/SectionTitle/SectionTitle";
import {TechTile} from "./components/TechTile/TechTile";
import {Project} from "./components/Projects/Project";
import {Education} from "./components/Education/Education";
import {Blog} from "./components/Blog/Blog";
import {CodeFight} from "./components/CodeFight/CodeFight";
import { GitHub } from './components/GitHub/GitHub';
import { Principles } from './components/Principles/Principles';
import { Footer } from './components/Footer/Footer';
import { ScrollArrows } from './components/ScrollArrows/ScrollArrows';

import {getProject} from "../data/projects";
import "./Project.style.scss";

const getMedia=(data:{src:string, type:string, description?:string}[]|undefined)=>{
    if(!data) return "";
    if(data.length > 0){
        let output = [];
        for(let i = 0; i < data.length; i++){
            let item = null;
            if(data[i].type === "video"){
                 item = (
                     <div className="project-media-container">
                        <video width="320" controls>
                            <source src={data[i].src} type="video/mp4"/>
                            <source src={data[i].src} type="video/ogg"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="project-media-description">{data[i].description}</div>
                    </div>
                );
            }
            if(data[i].type === "image"){
                item = (
                    <div className="project-media-container">
                        <img src={data[i].src} width="320"/>
                        <div className="project-media-description">{data[i].description}</div>
                    </div>
                ); 
            }

            if(!!item) output.push(item);

        }
        if(output.length > 0){
            output.unshift(<h2 className="project-detail-media-gal-title">Media Galery</h2>);
        }
        return output
    }else{
        return "";
    }
}

export const Projects = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectData = getProject(urlParams.get("id"));
    return(
        <div className="main container project-container" >
                <Project 
                    id={`project-id-${urlParams.get("id")}`}
                    title={projectData.name} 
                    company={projectData.company}
                    image-src={projectData["image-src"]} 
                    date={projectData.date} 
                    role={projectData.role}
                    tech-stack={projectData.techStack}>
                    <div className="project-details-label">Description</div>
                    <p>{projectData.description}</p>
                    <div className="project-par">
                        <div className="project-details-label">Problem to be solved</div>
                        <div className="project-problem" dangerouslySetInnerHTML={ {__html:projectData.problem} }></div>
                        
                        <div className="project-details-label">Role in the project</div>
                        <div className="project-action project-details-role"dangerouslySetInnerHTML={ {__html:projectData.action} }></div>
                        
                        <div className="project-details-label">Outcome</div>
                        <div className="project-result"dangerouslySetInnerHTML={ {__html:projectData.result} }></div>
                        
                        <div className="project-result"dangerouslySetInnerHTML={ {__html:projectData.metrics} }></div>
                    </div>
                    <a href={`/#project-id-${urlParams.get("id")}`}>return to project list</a>

                </Project>
                {getMedia(projectData.media)}
                
                            
        </div>
    )
}