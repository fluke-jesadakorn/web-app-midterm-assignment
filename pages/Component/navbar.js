import React from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
    display:block;
    background-color:green;
    text-align:center;
    padding:0;
    margin:0;
`
const Button = styled.span`
    display: inline;
    margin:20px;
`
export default class Index extends React.Component{
    render(){
        return(
            <Navbar>
                <Button>
                    Home
                </Button>
                <Button>
                    Infomation
                </Button>
                <Button>
                    About US
                </Button>
                <Button>
                    Login
                </Button>
            </Navbar>
        )
    }
}