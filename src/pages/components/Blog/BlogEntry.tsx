import React from "react";
import "./style.scss";
import classname from "classname";

export const BlogEntry = (props:any) =>{
    const {url,title, "img-src":imgSrc} = props;
    return (
        <a href={url} target="_blank" className={classname("blog-entry", props.className)}>
            <img className="blog-entry-img" src={imgSrc}/>
            <div className="blog-entry-text">{title}</div>
        </a>
    )
}