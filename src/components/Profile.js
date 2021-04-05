import React from 'react'
import { ExternalLink } from "react-external-link"

import ProfilePic from "../img/MritunjayTomar.jpg"
import ResumeIcon from "../img/Resume.png"

import "font-awesome/css/font-awesome.min.css"
import "../css/Profile.css"
import "../css/Common.css"

export default function Profile() {
    return (
        <>
            < ProfileMain />
            < ProfileInfo />
            < ExternalLinks />
        </>
    )
}


function ProfileMain() {
    return (
        <div className="ProfilePic" >
            <img src={ProfilePic} alt="My Profile Pic" />
        </div>
    )
}

function ProfileInfo() {
    return (
        <div className="ProfileInfo">
            <h3 id = "name">MRITUNJAY TOMAR</h3>
            <label className="RoleAndCompany">R&D Development Engineer @ Dassault Systèmes</label>
        </div>
    )
}

function ExternalLinks() {
    return (
        <>
            <div className = "ExternalLinks">
                <ExternalLink 
                    className="ExternalLink" 
                    href="https://www.linkedin.com/in/mritunjay-tomar/">
                        <span className="fa fa-linkedin" title="Linkedin"></span>
                </ExternalLink>
                <ExternalLink 
                    className="ExternalLink" 
                    href="https://github.com/mritunjay-tomar/" >
                        <span className="fa fa-github" title = "Github"></span>
                </ExternalLink>
                <ExternalLink 
                    className="ExternalLink" 
                    href="https://twitter.com/MritunjayT8" >
                        <span className="fa fa-twitter" title = "Twitter"></span>
                </ExternalLink>
                <ExternalLink 
                    className="ExternalLink" 
                    href="https://mritunjay-tomar.github.io/resume/Mritunjay's%20Resume.pdf" >
                        <img src={ ResumeIcon } alt="Resume" />
                </ExternalLink>
            </div>
        </>
    )
}