import React from 'react'
import { ExternalLink } from "react-external-link"

import "../css/Common.css"
import "../css/Project.css"
import "font-awesome/css/font-awesome.min.css"

export default function Projects() {
    return (
        <>
            <div className="CommonText">
                <h3>Projects</h3>
            </div>
            <div className="ProjectsMain">
                <div className="Project CommonText">
                    <h5>Lead Tracking</h5>
                    <ExternalLink href="https://github.com/mritunjay-tomar/LeadTracking"><span className="fa fa-github fa-2x" title="Github Repository"></span></ExternalLink>
                    <p>A project made on Python-Django-HTML which is basically used to </p>
                </div>
                <div className="Project CommonText">
                    <h5>Portfolio</h5>
                    <ExternalLink href="https://github.com/mritunjay-tomar/portfolio-mj"><span className="fa fa-github fa-2x" title="Github Repository"></span></ExternalLink>
                    <p>My portfolio website made on Node.js and React.js which has all my professional details</p>
                </div>
                <div className="Project CommonText">
                    <h5>React Repository</h5>
                    <ExternalLink href="https://github.com/mritunjay-tomar/react"><span className="fa fa-github fa-2x" title="Github Repository"></span></ExternalLink>
                    <p>A github repository where I dumb all my work on React which I feel like to share.</p>
                </div>
            </div>
        </>
    )
}