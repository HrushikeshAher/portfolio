import React from 'react'

import "../css/Common.css"
import "../css/Skills.css"

export default function Skills() {
    
    const ProgrammingLanguages = [
        "JavaScript",
        "Python",
        "VB.NET",
    ]

    const Frameworks = [
        "React JS",
        "Node JS",
        "Express JS",
        "Python-Django"
    ]

    const IndustryKnowledge = [
        "Algorithms",
        "Data Structures",
        "Object-Oriented Programming",
        "Web Development",
        "Debugging",
        "Designing REST API's"
    ]

    const DataBases = [
        "MS SQL Server",
        "MySQL",
        "MongoDB",
    ]

    return (
        <>
            <div id="ProgrammingLanguages" className="CommonText">
            <h3>Programming Languages</h3>
                {
                    ProgrammingLanguages.map( Language => {
                        return (
                            <>
                                <div className="skill">{Language}</div>
                            </>
                        )
                    } )
                }
            </div>

            <div id="Frameworks" className="CommonText">
                <h3>Frameworks</h3>
                {
                    Frameworks.map( Framework => {
                        return (
                            <>
                                <div className="skill">{Framework}</div>
                            </>
                        )
                    } )
                }
            </div>

            <div id="IndustryKnowledge" className="CommonText">
            <h3>Industry Knowledge</h3>
                {
                    IndustryKnowledge.map( Knowledge => {
                        return (
                            <>
                                <div className="skill">{Knowledge}</div>
                            </>
                        )
                    } )
                }
            </div>

            <div id="Databases" className="CommonText">
            <h3>Databases</h3>
                {
                    DataBases.map( DB => {
                        return (
                            <>
                                <div className="skill">{DB}</div>
                            </>
                        )
                    } )
                }
            </div>
        </>
    )
}
