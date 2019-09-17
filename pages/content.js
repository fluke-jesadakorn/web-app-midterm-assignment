import React from 'react'
import styled from 'styled-components'
const Body = styled.body`
    text-align:center;
    background-color : lightblue;
`
const H1 = styled.h1`
    /* */
`
const Catalog = styled.div`
    /*display:inline;*/
    text-align:center;
    margin: 10px;
    border:5px solid black;
    margin: 10px;
`
const margin = {
    margin : "10px",
    display : "inline"
};
export default class Content extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Body>
                <Catalog><img src="/static/images/pic1.jpg" alt="king" /></Catalog>
                <Catalog><div style = {margin}><img src="/static/images/kingandboat.jpg" alt="king" /></div>
                <img src="/static/images/kingplantrice.jpg" alt="king"/></Catalog>

                <Catalog><div style = {margin}><img src="/static/images/queenandking.jpg" alt="king" /></div>
                <img src="/static/images/kingandpipe.jpg" alt="king" /></Catalog>

                <Catalog><div style = {margin}><img src="/static/images/kingandfufu.jpg" alt="king" /></div>
                <div style = {margin}><img src="/static/images/kingandoldkinggun.jpg" alt="king"/></div>
                <div style = {margin}><img src="/static/images/kingandfathergun.jpg" alt="king"/></div></Catalog>
            </Body>
        )
    }
}