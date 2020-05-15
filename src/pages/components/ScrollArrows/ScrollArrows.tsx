import React from "react";
import classname from "classnames";
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
export const ScrollArrows = (props:any) =>{
    const getAnchors = () => {
        // Get all the anchor points in a page marked with the class anchor
        let output = [];
        const anchors = document.getElementsByClassName("anchor");
        for(let anchor in anchors){
            const id = anchors[anchor].id;
            if(id) output.push(anchors[anchor].id);
        }
        return output;
    };

    const getHash = () => {
        // Get the hash # from the url and finds out which anchor point is the previous and the next in the array
        const anchors = getAnchors();
        const hash = window.location.hash.replace("#","");
        const hash_index = anchors.indexOf(hash);
        let prev, next;
        if(hash_index == 0) {
            // prev = hash_index;
            prev = anchors.length-1;

        }else{
            prev = hash_index - 1;
        }

        if(hash_index == (anchors.length - 1)){
            // next = hash_index;
            next = 0;

        }else{
            next = hash_index + 1;
        }

        return {
            prev:hash ? anchors[prev] : anchors[0],
            curr: hash ? hash : anchors[0],
            next:hash ? anchors[next] : anchors[0]
        };
    }

    const goToPrevious = () => {
        window.location.href = "#"+getHash().prev;
        console.log(getHash())
    }

    const goToNext = () => {
        window.location.href = "#"+getHash().next;
        console.log(getHash())
    }
    return (
        <div className={classname("scroll-arrow-container")}>
            <div className={classname("scroll-arrow")} onClick={goToPrevious}>
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
            <div className={classname("scroll-arrow")}  onClick={goToNext}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            
        </div>
    )
}