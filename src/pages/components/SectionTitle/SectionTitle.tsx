import React from "react";
import "./style.scss";
import classname from "classnames";

export const SectionTitle = (props:any) => {
    const {label, id, className} = props;

    const section_id = id ? id : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    return (
        <div className={classname("section-title anchor",className)} id={section_id}>
            <div className="inner">
                {label}
            </div>
        </div>
    )
}
