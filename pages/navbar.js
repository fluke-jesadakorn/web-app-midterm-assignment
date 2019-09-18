import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const Navbar = styled.div`
    display:block;
    background-color:green;
    text-align:center;
    padding:10px;
    margin-left:0;
`
const Button = styled.span`
    display: inline;
    margin:55px;
    text-decoration: none;
    padding : 10px;

    &:hover {
        background-color: palevioletred;
        color: white;
    }
`

export default class Nav extends React.Component{
    render(){
        return(
            <div>
            <Navbar>
                <Button>
                <Link href = "/"><a>Home</a></Link>
                </Button>
                <Button>
                <Link href = "/infomation"><a>Infomation</a></Link>
                </Button>
                <Button>
                <Link href = "/about"><a>About</a></Link>    
                </Button>
                <Button>
                <Link href = "/login"><a>Login</a></Link>  
                </Button>
            </Navbar>
        <div>
            {this.props.children}
        </div>
        </div>
        )
    }
}