import React from 'react'
import Nav from './navbar'
const center = {
    "text-align":"center",
    "text-color":"red",
}
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
export default class Login extends React.Component{
    render(){
        return(
            <div style = {body}>
                <Nav>
                    <div style = {center}><h1>Not avilable now</h1></div>
                </Nav>
            </div>
        )
    }
}