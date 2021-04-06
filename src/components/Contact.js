import React from 'react'
// import { ExternalLink } from "react-external-link"

import "font-awesome/css/font-awesome.min.css"
import "../css/Common.css"
import "../css/Contact.css"

export default function Contact() {
    return (
        <>
            <div className="CommonText">
                <h3>Contact Me</h3>
            </div>
            <div className="EmailForm CommonText">
                <table>
                <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Your E-mail</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Body</label></td>
                    <td><textarea rows="5" cols="50"></textarea></td>
                </tr>
                <tr><button type="submit">Submit</button></tr>
                </table>
            </div>
        </>
    )
}
