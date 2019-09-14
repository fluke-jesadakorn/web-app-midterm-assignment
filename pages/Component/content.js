import React from 'react'
import styled from 'styled-components'
const Body = styled.body`
    text-align:center;
`
const H1 = styled.h1`
    /* */
`

const Image = styled.body`
    
`

export default class Content extends React.Component{
    render(){
        
        return(
            <Body>
                <H1>
                    Thailand seeks US$251 million for palace budget, a 13% hike
                </H1>
                <img src="/static/images/pic1.jpg" />
            </Body>
        )
    }
}