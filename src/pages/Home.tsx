import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

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

import {projects} from "../data/projects";

export const Home = () => {
    return(
        <div className="main with-bkg" id="introduction">
            <Introduction name="Fabio Almeida" message="a full stack software developer"/>
            <div className="main-container container-fluid">
                <Education id="what_i_know" className="anchor"/>
                
                <SectionTitle label="Here's what i know"/>
                <div className="flex-container inline-flex center">
                    <TechTile src="./logos/javascript.png" label="Javascript" rating={5}/>
                    <TechTile src="./logos/typescript.png" label="Typescript" rating={5}/>
                    <TechTile src="./logos/react.png" label="ReactJS" rating={5}/>
                    <TechTile src="./logos/nodejs.png" label="NodeJS" rating={5}/>

                    <TechTile src="./logos/java.png" label="Java" rating={4}/>
                    <TechTile src="./logos/html5.png" label="HTML 5" rating={5}/>
                    <TechTile src="./logos/css3.png" label="CSS 3" rating={5}/>
                </div>

                <SectionTitle label="And I also know these"/>
                <div className="flex-container inline-flex center">
                    <TechTile src="./logos/spark.png" label="Apache Spark" size="small"/>
                    <TechTile src="./logos/angular.png" label="Angular" size="small"/>
                    <TechTile src="./logos/python.png" label="Python" size="small"/>
                    <TechTile src="./logos/solr.png" label="Apache Solr" size="small"/>
                    <TechTile src="./logos/oracle.png" label="Oracle" size="small"/>
                    <TechTile src="./logos/sql.png" label="SQL" size="small"/>
                    <TechTile src="./logos/mongodb.png" label="mongo DB" size="small"/>
                    <TechTile src="./logos/maven.png" label="Apache Maven" size="small"/>
                </div>


                <div className="container-fluid highlighted">
                    <SectionTitle label="It's all about Principles"/>
                        <Principles className="col-sm-8 col-xs-12 center-horizontally" />
                </div>

                <SectionTitle label="Here are a few projects I've worked on"  id="projects"/>
                <div className="col-sm-9 center" >
                    
                    {projects.map((value,index) => {
                        return (
                            <div>
                                <a id={`project-id-${index}`} className="project-item-anchor"/>
                                <Project 
                                    title={value.name} 
                                    company={value.company}
                                    image-src={value["image-src"]} 
                                    date={value.date} 
                                    role={value.role}
                                    tech-stack={value.techStack}>
                                    <p className="project-description-paragraph">{value.description}</p>
                                    <a href={`/projects?id=${index}`}>Click to see details and my role for this project</a>
                                </Project> 
                            </div>       
                         )}
                   )}

              </div>

               <div className="container-fluid highlighted">
                    <SectionTitle label="Take a look at this code on GitHub </> " id="github"/>
                    <GitHub  className="col-sm-8 col-xs-12 center-horizontally"/>
                </div>

               <SectionTitle label="Passionate about problem solving"/>
               <CodeFight className="col-sm-8 col-xs-12 center-horizontally"/>

               <SectionTitle label="Get into my brain" id="aboutme"/>
               <Blog className="col-sm-8 center center-horizontally"></Blog>
               
               
               <SectionTitle label="My timeline in a snapshot" id="timeline"/>
                <img src="./timeline-2.jpg" className="col-sm-8 col-xs-12 center-horizontally"/>
                <div className="col-sm-8 col-xs-12 center-horizontally timeline">
                    <p>In <b>1999</b> I built my first website on a pentium I computer, using just html and adobe Flash. In <b>2000</b> I started college for software development.</p>
                    <p>In <b>2002</b> I left Brazil with $400 in my pocket to live in New York. The next seven years i worked in construction, newspaper, graphic designer and taught martial arts. In <b>2009</b> I went back to college for Computer Engineering and at the end of <b>2011</b> I landed an internship with General Electric as a Field Service Engineer</p>
                    <p>In <b>2012</b> I Transfered from Field Services to become a developer for GEHC USCAN (US, Canada and Mexico). <b>2014</b> I was transfering to become a full stack developer for GEHC GST (Global Services Technology).</p>
                    <p>After 5 years in GST, and many different roles, in <b>2019</b> I joined the CDx team as a Full Stack software engineer.</p>
                </div>

               <Footer className="col-sm-8 com-xs-12 center center-horizontally"/>
               <ScrollArrows/>
            </div>

        </div>
    )
}