import React from "react";
import classname from "classname";

import "./style.scss";
import { TechTile } from "../TechTile/TechTile";

export const GitHub = (props:any) =>{
    return (
        <div className={classname("github-container", props.className)}>
            <TechTile src="./logos/github.png" label="GitHub"/>
            
            <div className="github-description">
                <p>This single page web app took me <b>6.5 hours</b> to create from scratch. All codes and components here were thought, organized and typed by me</p>
                <p>This <b>entire</b> source code is publicly available on github for you to take a look. </p>
                <p>And while you are there, let me know what you think of the <b>code organization, reusability and commenting</b></p>
                <a href="https://github.com/212070170/portifolio" target="_blank">View code on github</a>
                </div>
        </div>
    )
}