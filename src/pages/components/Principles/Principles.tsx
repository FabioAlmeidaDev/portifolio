import React from "react";
import classname from "classnames";
import "./style.scss";
import { PrincipleItem } from "./PrincipleItem";

export const Principles = (props:{children?:any, className?:string}) =>{

    return (
        <div className={classname("principles-container", props.className)}>
            <PrincipleItem background-color="#F65" label="Nothing is impossible <small>we just haven't found a way to do it yet!" color="#FFF" />
            <PrincipleItem background-color="#369" label="Why > What" />
            <PrincipleItem background-color="#777" label="First things first"/>
            <PrincipleItem background-color="#fce00a" label="YOU &ne; USER" color="#000"/>
            <PrincipleItem background-color="#6bd600" label="Always leave your code better than how you found it"/>
        </div>
    )
}