import React from 'react'
import styled from 'styled-components'
//import pic from '../images/pic1.jpg'
import Picture from 'react-picture-component'
const images = {
    pic1: '../images/pic1.jpg'
}

const Body = styled.body`
    text-align:center;
`
const H1 = styled.h1`
    /* */
`

const Image = styled.body`
    
`
export default class Index extends React.Component{
    render(){
        return(
            <Body>
                <H1>
                    Thailand seeks US$251 million for palace budget, a 13% hike
                </H1>
                <Image>
                    <Picture images = {images}/>
                </Image>
            </Body>
        )
    }
}