import React from "react";
import "./style.scss";
import classname from "classnames";

export const Introduction =(props:{name:string, message:string, className?:string, id?:string})=>{
    return(
        <div className={classname("introduction",props.className)} id={props.id}>
            <div className="inner">
                <div className="greeting">Hi, I'm</div>
                <div className="name">{props.name}</div>
                <div className="message">{props.message}</div>

            </div>
        </div>
    )
}