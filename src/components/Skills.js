import React from 'react'

import "../css/Common.css"
import "../css/Skills.css"

export default function Skills() {
    return (
        <>
            <div className="CommonText">
                <h3>Programming Languages</h3>
                <div className="skill">JavaScript</div>
                <div className="skill">HTML5</div>
                <div className="skill">CSS</div>
                <div className="skill">Python</div>
            </div>

            <div className="CommonText">
                <h3>Frameworks</h3>
                <div className="skill">React JS</div>
                <div className="skill">Node JS</div>
                <div className="skill">Express JS</div>
                <div className="skill">Python-Django</div>
            </div>

            <div className="CommonText">
                <h3>Industry Knowledge</h3>
                <div className="skill">Algorithms</div>
                <div className="skill">Data Structures</div>
                <div className="skill">Object-Oriented Programming</div>
                <div className="skill">Debugging</div>
            </div>
        </>
    )
}
