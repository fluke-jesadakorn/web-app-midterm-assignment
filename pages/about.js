import React from 'react'
import Nav from './navbar'
const center = {
    "text-align":"center",
};
const body = {
    "background-color" : "lightblue",
}
export default class About extends React.Component{
    render(){
        return(
            <div style = {body}>
                <Nav>
                <h1 style = {center}>RIP Tongchai Butchart</h1>
                </Nav>
            </div>
        )
    }
}