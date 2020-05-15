import React from "react";
import "./style.scss";

export const Introduction =(props:{name:string, message:string})=>{
    return(
        <div className="introduction">
            <div className="inner">
                <div className="greeting">Hi, I'm</div>
                <div className="name">{props.name}</div>
                <div className="message">{props.message}</div>

            </div>
        </div>
    )
}