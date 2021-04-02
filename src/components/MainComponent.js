// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import Experience from "./Experience"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"

import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export default function MainComponent() {
    return (
        <>
            <BrowserRouter>

            <Navbar bg="light">
                <Nav.Link><NavLink to="/" style={{ textDecoration: 'none' }}>About</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/experience" style={{ textDecoration: 'none' }}>Experience</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/skills" style={{ textDecoration: 'none' }}>Skills</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/projects" style={{ textDecoration: 'none' }}>Projects</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/contact" style={{ textDecoration: 'none' }}>Contact Me</NavLink></Nav.Link>
            </Navbar>
            
            <Switch>
                <div className="MainComponentContent">
                    <Route exact path = '/' component={About} />
                    <Route path = '/experience' component={Experience} />
                    <Route path="/skills"><Skills/></Route>
                    <Route path="/contact"><Contact /></Route>
                </div>
            </Switch>
            </BrowserRouter>
        </>
    )
}
