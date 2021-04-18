import React from 'react'
import "../css/Experience.css"

export default function Experience() {
    
    const AllExperience = [
        {
            Role : "R&D Development Engineer @ Dassault Systèmes",
            Responsibility : "Have worked as a full stack engineer with React.js as frontend tech and ruby on rails as backend tech."
        },
        {
            Role : "Software Analyst @ Yardi Software India Pvt. Ltd.",
            Responsibility : "Worked as Full-Stack developer where I created frameworks, bug fixing, enhancements and adding new features using JavaScript frameworks namely Node.js and React.js for frontend and MS SQL Server as backend tech."
        }
    ]
    
    return (
        <>
            <div className="Heading">
                <h3>Experience</h3>
            </div>
            <div className="ExperieneMain Container">
                {
                    AllExperience.map( Experience => {
                        return (
                            <>
                                <div className="Experience">
                                    <label className="OrgName">{Experience.Role}</label>
                                    <p>{Experience.Responsibility}</p>
                                </div>
                                <br/>
                            </>
                        )
                    } )
                }
            </div>
        </>
    )
}
