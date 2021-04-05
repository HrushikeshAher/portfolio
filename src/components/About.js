import React from 'react'

import "../css/Common.css"

export default function About() {
    return (
        <div className="AboutMain">
            <IAm />
            <Summary />
            <Interests />
            {/* <Aspirations /> */}
        </div>
    )
}

function Summary() {
    return (
        <div className="Summary CommonText">
            <h3>About</h3>
            <p>
                Having assets like forward thinking, loyalty, honesty and sincerity, I always wish to contribute towards for the success of an organization.
                A Full Stack Developer who specializes in JavaScript technologies across the stack - React.js, Node.js, Express.js. Experience in building complete web applications with backend API Systems. 
            </p>
        </div>
    )
}

function Interests() {
    return (
        <div className="Interests CommonText">
            <h3>Interests</h3>
            <ul>
                <li>Software Development</li>
                <li>Machine Learning</li>
                <li>Games</li>
                <li>Travelling</li>
            </ul>
        </div>
    )
}

// function Aspirations() {
//     return(
//         <>
//         <div className="CommonText">
//             <h3>Aspirations</h3>
//             <p>

//             </p>
//         </div>
//         </>
//     )
// }

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