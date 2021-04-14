import React from 'react'

import "../css/Common.css"
import "../css/About.css"

export default function About() {
    return (
        <div className="AboutMain">
            <IAm />
            <Summary />
            <Interests />
        </div>
    )
}

function Summary() {
    return (
        <div className="Summary CommonText">
            <h3>About</h3>
            <p>
                I am a driven individual with the ability to adapt to any situation and proven potantial to grow self and others. Having assets like forward thinking, loyalty, honesty and sincerity, I always wish to contribute towards for the success of an organization.
            </p>
        </div>
    )
}

function Interests() {
    const Interests = [
        "Software Development",
        "Machine Learning",
        "Full-Stack Development",
        "Algorithms",
        "Data Structures"
    ]

    return (
        <>
            <div className="InterestHeading">
                <h3>Interests</h3>
            </div>
            <div className="Interests CommonText">
                {
                    Interests.map(function(Interest) {
                        return <div className="Interest">{Interest}</div>
                    })
                }
            </div>
        </>
    )
}

function IAm() {
    return(
        <>
        <div className="CommonText">
            <h3>I'm a </h3>
            <h4>Software Developer, Full-Stack Engineer, Freelancer, Machine Learning Enthustiast</h4>
        </div>
        </>
    )
}