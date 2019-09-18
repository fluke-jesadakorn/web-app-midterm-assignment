import React from 'react'
import Nav from './navbar'
const center = {
    "text-align":"center",
};
const body = {
    "background-color" : "lightblue",
    "position":"absolute",
    "padding":"0",
    "margin":"0",
    "top":"0",
    "right":"0",
    "width":"100%",
    "height":"100%",
}
export default class About extends React.Component{
    render(){
        return(
            <div style = {body}>
                <Nav>
                <h1 style = {center}>Tongchai Butchart</h1>
                <h1 style = {center}>Prompen </h1>
                <h1 style = {center}>Jesadakorn Kirtnu</h1>
                <h1 style = {center}>Pornprom</h1>
                </Nav>
            </div>
        )
    }
}