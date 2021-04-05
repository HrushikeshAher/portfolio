import React from 'react'
import { ExternalLink } from "react-external-link"

import "font-awesome/css/font-awesome.min.css"

export default function Contact() {

    const ContactStyle = {
        display:'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '25vh'
    }

    return (
        <div style={ContactStyle}>
            <label id="email"><span className="fa fa-at"></span> mritunjai88@gmail.com</label>
            <label id="PhoneNumber"><span className="fa fa-whatsapp"></span> +91 - 7387391018</label>
            <ExternalLink className="ExternalLink" href="https://www.linkedin.com/in/mritunjay-tomar/"><span className="fa fa-linkedin"></span> Linked-in</ExternalLink>
        </div>
    )
}
