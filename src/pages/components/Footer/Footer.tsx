import React from "react";
import classname from "classnames";
import {TechTile} from "../TechTile/TechTile";

import "./style.scss";

export const Footer = (props:{children?:any, className?:string}) => {
    const{children, className} = props;
    return (
        <div className={classname("footer", className)}>
            <div>
                Lets connect. I prefer <b>emails</b> and <b>linkedIn messages</b>.
            </div>
            <div className="footer-social-media-container">
            <a href="mailto: fabiokpoeira@gmail.com" target="_blank" className="footer-tile">
                    <TechTile src="./logos/email.png" size="small"/>
                </a>
               <a href="https://www.linkedin.com/in/almeidafabio/" target="_blank" className="footer-tile">
                    <TechTile src="./logos/linkedin.png" size="small"/>
                </a>
            </div>
        </div>
    )
}