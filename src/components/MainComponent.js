//import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Experience from "./Experience"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Projects from "./Project"

import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

import "../css/Common.css"

export default function MainComponent() {
    
    const LinkStyle = {
        textDecoration: 'none'
    }

    return (
        <>
            <BrowserRouter>
            
            <div className="NavBar">
                <Navbar bg="light" className=".ExternalLinks">
                    <Nav.Link><NavLink to="/" exact activeClassName="activeClass" style={LinkStyle }>About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/experience" activeClassName="activeClass" style={ LinkStyle }>Experience</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/skills" activeClassName="activeClass" style={LinkStyle}>Skills</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/projects" activeClassName="activeClass" style={LinkStyle}>Projects</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/contact" activeClassName="activeClass" style={LinkStyle}>Contact Me</NavLink></Nav.Link>
                </Navbar>
            </div>
            
            <Switch>
                <div className="MainComponentContent">
                    <Route exact path = '/'> <About /> </Route>
                    <Route path = '/experience'> <Experience /> </Route>
                    <Route path="/skills"><Skills/></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route path="/projects"><Projects /></Route>
                </div>
            </Switch>
            
            </BrowserRouter>
        </>
    )
}