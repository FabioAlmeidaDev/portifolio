import React from "react";
import classname from "classname";
import "./style.scss";

export const CodeItem = (props:any) => {
    const {title, "image-src":imgSrc, children} = props;
    return (
            <div className={classname("code-container")}>
                <div className={classname("code-description-container")}>
                    <h3>{title}</h3>
                    {children}
                </div>
                <div className={classname("code-snippet-container")}>
                    <a href={imgSrc} target="blank">
                        <img src={imgSrc} className="code-image"/>
                        <img src="./click-me.png" className="click-me-code"/>
                    </a>
                </div>
            </div>
    )
}