import React from 'react'
import emailjs from "emailjs-com"
import { Button } from "react-bootstrap"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";

import "font-awesome/css/font-awesome.min.css"
import 'react-toastify/dist/ReactToastify.css';
import "../css/Common.css"
import "../css/Contact.css"

import{ init } from 'emailjs-com';
init("user_Ag2MyMDBMQX9rZitTmqSv");

export default function Contact() {
    
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [body, setBody] = useState("")

    const onChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const onChangeBody = (e) => {
        e.preventDefault();
        setBody(e.target.value);
    }

    const onClickSubmitHandler = (e) => {
        
        e.preventDefault();
        
        if (name.trim() === "") {
            Toast(false, "Error occurred in sending E-mail.")
            return
        } else if (email.trim === "") {
            Toast(false, "Error occurred in sending E-mail.")
            return
        } else if (body.trim === "") {
            Toast(false, "Error occurred in sending E-mail.")
            return
        }

        emailjs.sendForm("service_y2kz80g","template_wvc1whu", e.target)
        .then((result) => {
            console.log(result.text);
            Toast(true, "E-mail sent successfully.");
            onClickClearHandler();
        }, (error) => {
            console.log(error.text);
            Toast(false, "Error occurred in sending E-mail.")
        });
    }

    const onClickClearHandler = () => {
        setName("");
        setEmail("");
        setBody("");
    }

    const Toast = (Successfull, message) => {
        if (Successfull) {
            toast.success(message, { 
                position: toast.POSITION.BOTTOM_RIGHT
            });
        } else {
            toast.error(message, { 
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }
    
    return (
        <>
            <div className="CommonText">
                <h3>Contact Me</h3>
            </div>
            <form className="EmailForm CommonText" onSubmit={onClickSubmitHandler}>
                <table>
                <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" size="50" name="name" value={name} onChange={onChangeName} /></td>
                </tr>
                <tr>
                    <td><label>Your E-mail</label></td>
                    <td><input type="email" size="50" name="email" value={email} onChange={onChangeEmail} /></td>
                </tr>
                <tr>
                    <td><label>Body</label></td>
                    <td><textarea rows="5" cols="50" name="body" value={body} onChange={onChangeBody}></textarea></td>
                </tr>
                <tr>
                    <td><Button type="submit" >Submit</Button></td>
                    <td><Button variant="secondary" onClick={onClickClearHandler}>Clear</Button></td>
                </tr>
                </table>
            </form>
            <ToastContainer />
        </>
    )
}