import React from "react";
import "./style.scss";

export const SectionTitle = (props:any) => {
    const {label} = props;

    
    return (
        <div className="section-title">
            <div className="inner">
                {label}
            </div>
        </div>
    )
}
