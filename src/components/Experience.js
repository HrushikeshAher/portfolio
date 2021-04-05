import React from 'react'
import "../css/Experience.css"

import Yardi from "../img/yardi.jpg"
import DS from "../img/3ds.jpg"

export default function Experience() {
    return (
        <>
            <div className="Heading">
                Experience
            </div>
            <div className="ExperieneMain">

                {/* <div className="CompanyLogo">
                        <img src={DS} alt="3DS logo" />
                    </div> */}
                <div id="Experience_Yardi" className="Experience">
                    <label className="OrgName">Organization - Dassault Systèmes</label>
                    <label className="Tenure">Apr 2021 - Current</label>
                    <label className="Designation">R&D Development Engineer</label>
                </div>

                {/* <div className="CompanyLogo">
                    <img src={Yardi} alt="Yardi logo" />
                </div> */}
                <div id="Experience_Yardi" className="Experience">
                    <label className="OrgName">Yardi Software India Pvt. Ltd.</label>
                    <label className="Tenure">Aug 2019 - Apr 2021</label>
                    <label className="Designation">Software Analyst</label>
                </div>
            </div>
        </>
    )
}
