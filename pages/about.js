import React from 'react'
import Nav from './navbar'

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
const center = {
    "text-align":"center",
}

const h1 = {
    "text-align":"center",
    "font-size":"50px",
    "font-family":"",
    "font-color":"red"
}
export default class About extends React.Component{
    render(){
        return(
            <div style = {body}>
                <Nav>
                <h1 style = {h1}>RIP</h1>
                <h2 style = {center}>ธงชัย บุตรชาติ 5835512017</h2>
                <h2 style = {center}>สิริเทพ ทองด้วง 5835512107</h2>
                <h2 style = {center}>เจษฎรกร เกิดหนู 5835512119</h2>
                <h2 style = {center}>Pornprom</h2>
                </Nav>
            </div>
        )
    }
}