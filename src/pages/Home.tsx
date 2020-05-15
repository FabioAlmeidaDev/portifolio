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
export const Home = () => {
    return(
        <div className="" >
            <Introduction name="Fabio Almeida" message="a full stack software developer"/>
            <div className="main-container container-fluid">
                <Education/>
                <SectionTitle label="Here's what i know"/>
                <div className="flex-container inline-flex center">
                    <TechTile src="./logos/javascript.png" label="Javascript" rating={5}/>
                    <TechTile src="./logos/typescript.png" label="Typescript" rating={5}/>
                    <TechTile src="./logos/react.png" label="ReactJS" rating={5}/>
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
                </div>

                <SectionTitle label="Here are a few projects I've worked on"/>
                <div className="col-sm-9 center">
                    <Project 
                        title="Component Library" 
                        company="GE Healthcare, CDx"
                        image-src="./project-images/component-library.png" 
                        date="Since May 2019" 
                        role="Front-End Software Engineer"
                        tech-stack={
                            [
                                {label:"Typescript",src:"./logos/typescript.png"},
                                {label:"Javascript",src:"./logos/javascript.png"},
                                {label:"ReactJS",src:"./logos/react.png"},
                                {label:"CSS3",src:"./logos/css3.png"},
                            ]}>
                        <p>A project targeting to develop and deliver a ready-to-use library of UI components, leveraging GEHC CDx's design system. These components are used by front end developers to create high fidelity UI and UX as outlined by the User Experience team</p>
                    </Project>
 
 
                    <Project 
                        title="SmartTriage" 
                        role="Full Stack Software Engineer"
                        date="September 2016 - May 2019" 
                        company="GE Healthcare, Global Services Technology"
                        image-src="./project-images/component-library.png" 
                        tech-stack={
                            [
                                {label:"Python",src:"./logos/python.png"},
                                {label:"Solr",src:"./logos/solr.png"},
                                {label:"Spark",src:"./logos/spark.png"},
                                {label:"Javascript",src:"./logos/javascript.png"},
                                {label:"Angular",src:"./logos/angular.png"},
                                {label:"CSS3",src:"./logos/css3.png"},
                                {label:"HTML",src:"./logos/html5.png"},
                            ]}>
                        <p>A project targeting to develop and deliver a ready-to-use library of UI components, leveraging GEHC CDx's design system. These components are used by front end developers to create high fidelity UI and UX as outlined by the User Experience team</p>
                    </Project>
                    
                    
                    <Project 
                        title="Find an Expert" 
                        company="GE Healthcare, Global Services Technology"
                        image-src="./project-images/component-library.png" 
                        date="March 2016 - September 2016" 
                        role="Full Stack Software Engineer"
                        tech-stack={
                            [
                                {label:"Java",src:"./logos/java.png"},
                                {label:"Angular",src:"./logos/angular.png"},
                                {label:"CSS3",src:"./logos/css3.png"},
                                {label:"HTML",src:"./logos/html5.png"},
                            ]}>
                        <p>A project targeting to develop and deliver a ready-to-use library of UI components, leveraging GEHC CDx's design system. These components are used by front end developers to create high fidelity UI and UX as outlined by the User Experience team</p>
                    </Project>
                    
                    
                    <Project 
                        title="SynerGE CRM" 
                        company="GE Healthcare, Global Services Technology"
                        image-src="./project-images/component-library.png" 
                        date="March 2015 - September 2016" 
                        role="Front-End Software Engineer"
                        tech-stack={
                            [
                                {label:"Typescript",src:"./logos/typescript.png"},
                                {label:"Javascript",src:"./logos/javascript.png"},
                                {label:"ReactJS",src:"./logos/react.png"},
                                {label:"CSS3",src:"./logos/css3.png"},
                            ]}>
                        <p>A project targeting to develop and deliver a ready-to-use library of UI components, leveraging GEHC CDx's design system. These components are used by front end developers to create high fidelity UI and UX as outlined by the User Experience team</p>
                    </Project>
                    
                    
                    <Project 
                        title="FE Homepage" 
                        company="GE Healthcare, Americas"
                        image-src="./project-images/component-library.png" 
                        date="November 2012 - April 2015" 
                        role="Front-End Software Engineer"
                        tech-stack={
                            [
                                {label:"Typescript",src:"./logos/typescript.png"},
                                {label:"Javascript",src:"./logos/javascript.png"},
                                {label:"ReactJS",src:"./logos/react.png"},
                                {label:"CSS3",src:"./logos/css3.png"},
                            ]}>
                        <p>A project targeting to develop and deliver a ready-to-use library of UI components, leveraging GEHC CDx's design system. These components are used by front end developers to create high fidelity UI and UX as outlined by the User Experience team</p>
                    </Project>
               </div>
               <SectionTitle label="This code is on GitHub </> "/>
               <GitHub  className="col-sm-8 col-xs-12 center-horizontally"/>
               <SectionTitle label="Passionate about problem solving"/>
               <CodeFight className="col-sm-8 col-xs-12 center-horizontally"/>
               <SectionTitle label="Get into my brain"/>
               <div>
               https://github.com/212070170?tab=repositories
               </div>
               <div>
               </div>
               <Blog className="col-sm-8 center center-horizontally"></Blog>


               <SectionTitle label="My process"/>


               <SectionTitle label="footer"/>

            </div>

        </div>
    )
}