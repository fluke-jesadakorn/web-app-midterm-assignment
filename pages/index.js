import React from 'react'
import styled from 'styled-components'
import Nav from './Component/navbar'
import Body from './Component/content'
const Div = styled.div`
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    right:0;
    width:100%;
    height:100%;
    background-color: lightcyan;
`
export default class Index extends React.Component{
    render(){
        return(
            <Div>
                <Nav/>
                <Body/>
            </Div>
        )
    }
}