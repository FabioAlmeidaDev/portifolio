import React from "react";
import classname from "classnames";
import "./style.scss";

export const PrincipleItem = (props:{children?:any, "background-color":string, color?:string, label:string, className?:string}) =>{
    const {children, "background-color":backgroundColor,color="#fff",label, className} = props;
    const innerhtml = {__html:label};
    return (
        <div className={classname("principles-item", className)} style={{backgroundColor, color}} dangerouslySetInnerHTML={innerhtml}>
        </div>
    )
}