import React from 'react'
import { ExternalLink } from "react-external-link"

import "../css/Common.css"
import "../css/Project.css"
import "font-awesome/css/font-awesome.min.css"

export default function Projects() {
    
    const Projects = [
        {
            Name: "Lead Tracking",
            GithubURL : "https://github.com/mritunjay-tomar/LeadTracking",
            Desc : "A project made on Python-Django-HTML."
        },
        {
            Name: "Portfolio",
            GithubURL : "https://github.com/mritunjay-tomar/portfolio-mj",
            Desc : "My portfolio website made on Node.js and React.js which has all my professional details."
        },
        {
            Name: "React Repository",
            GithubURL : "https://github.com/mritunjay-tomar/react",
            Desc : "A github repository where I dumb all my work on React which I feel like to share."
        }
    ]
    
    return (
        <>
            <div className="CommonText">
                <h3>Projects</h3>
            </div>

            <div className="ProjectsMain">
                {
                    Projects.map( Project => {
                        return (
                            <div className="Project CommonText">
                                <h5>{Project.Name}</h5>
                                <ExternalLink href={Project.GithubURL}><span className="fa fa-github fa-2x" title="Github Repository"></span></ExternalLink>
                                <p>{Project.Desc}</p>
                            </div>
                        )
                    } )
                }
            </div>
        </>
    )
}