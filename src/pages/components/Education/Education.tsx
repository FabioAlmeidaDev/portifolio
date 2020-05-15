import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import "./style.scss";

export const Education = (props:any) =>{

    return (
        <div className="education-container">
            <div className="education-primary">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>Bachelors of Computer Engineering, <i>4.0 GPA</i></span>
            </div>
            <div className="education-secondary">
                and I can speak <b>Portuguese</b> and <b>English</b> fluently
            </div>
        </div>
    )

}