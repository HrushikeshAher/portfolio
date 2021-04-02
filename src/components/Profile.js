import React from 'react'
import image from "../img/MritunjayTomar.jpg"

import "font-awesome/css/font-awesome.min.css"
import "../css/Profile.css"
import "../css/Common.css"

import { ExternalLink } from "react-external-link"

export default function Profile() {
    return (
        <>
            < ProfilePic />
            < ProfileInfo />
            < ExternalLinks />
        </>
    )
}


function ProfilePic() {
    return (
        <div className="ProfilePic" >
            <img src={image} alt="My Profile Pic" />
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
                <ExternalLink className="ExternalLink" href="https://www.linkedin.com/in/mritunjay-tomar/" ><span className="fa fa-linkedin"></span></ExternalLink>
                <ExternalLink className="ExternalLink" href="https://github.com/mritunjay-tomar/" ><span className="fa fa-github"></span></ExternalLink>           
                <ExternalLink className="ExternalLink" href="https://github.com/mritunjay-tomar/" ><span className="fa fa-twitter"></span></ExternalLink>           
            </div>
        </>
    )
}