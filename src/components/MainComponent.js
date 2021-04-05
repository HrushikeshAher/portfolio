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

export default function MainComponent() {
    return (
        <>
            <BrowserRouter>

            <Navbar bg="light">
                <Nav.Link><NavLink to="/" activeClassName="active" style={{ textDecoration: 'none' }}>About</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/experience" activeClassName="active" style={{ textDecoration: 'none' }}>Experience</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/skills" activeClassName="active" style={{ textDecoration: 'none' }}>Skills</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/projects" activeClassName="active" style={{ textDecoration: 'none' }}>Projects</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/contact" activeClassName="active" style={{ textDecoration: 'none' }}>Contact Me</NavLink></Nav.Link>
            </Navbar>
            
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