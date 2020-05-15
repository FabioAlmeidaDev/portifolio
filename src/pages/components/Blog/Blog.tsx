import React from "react";
import "./style.scss";
import classname from "classnames";
import {BlogEntry} from "./BlogEntry";
export const Blog = (props:any) =>{

    return (
        <div className={classname("blog-container",props.className)}>
            <div className={classname("blog-blurp")}>
                From time to time I like to write a couple of articles on LinkedIn highlighting something about my day-to-day and what it is to be a full stack developer in todays industry. Here are a few of the posts i have published... 
            </div>
            <div className="blog-list-container flex-container">
                <BlogEntry title="I don't have time for that" url="https://www.linkedin.com/pulse/i-dont-have-time-fabio-almeida/" img-src="./blog-images/idonthavetime.jpg" className="col-sm-4 col-xs-12"/>
                <BlogEntry title="A Wednesday in Full Stack Dev" url="https://www.linkedin.com/pulse/from-crazy-nearly-perfect-wednesday-full-stack-fabio-almeida/" img-src="./blog-images/theprocess.jpg" className="col-sm-4 col-xs-12"/>
                <BlogEntry title="The Process" url="#" img-src="./blog-images/theprocess2.jpeg" className="col-sm-4 col-xs-12"/>
            </div>
        </div>
    )
}