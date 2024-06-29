import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import "./style.scss";
import classname from "classnames";

export const Education = (props:any) =>{
    const {id, className} = props;
    return (
        <div className={classname("education-container", className)} id={id}>
            <div className="education-primary">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>Bachelors of Computer Engineering, <i>4.0 GPA</i></span>
            </div>
            <div>
                <span>Valedictorian</span>
            </div>
            <div className="education-secondary">
                and I can speak <b>Portuguese</b> and <b>English</b> fluently
            </div>
        </div>
    )

}