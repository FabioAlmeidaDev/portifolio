import React from "react";
import "./style.scss";
import classname from "classname";
import {CodeItem} from "./CodeItem";
export const CodeFight = (props:any) =>{

    return(
        <div className={classname("codefight-outer-container", props.className)}>
            <div className={classname("codefight-blurp")}>
                <p>During my time off I like to spend a few minutes (or hours) over at <a href="https://app.codesignal.com/profile/fabioalmeida" target="_blank" className="link">codesignal.com</a> working on my coding skills to stay sharp on my critical thinking while solving real world problems with computer programming. Here are a few of my solutions:</p>
            </div>

            <CodeItem title="All Longest Strings" image-src="./codesignal-solutions/longestStrings.png">
                Given an array of strings, return another array containing all of its longest strings
                <h5>Example</h5>
                For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].               
            </CodeItem>

            <CodeItem title="Almost Increasing Sequence" image-src="./codesignal-solutions/almostIncreasing.png">
                Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 &lt; a1 &lt; ... &lt; an. Sequence containing only one element is also considered to be strictly increasing.
            </CodeItem>
 
            <CodeItem title="Shape Area" image-src="./codesignal-solutions/shapeArea.png">
            Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
            </CodeItem>
             
            <div>
               https://app.codesignal.com/profile/fabioalmeida

            </div>
        </div>
    )
}