import React from 'react';
import './Style.css';

const name = "jessica";
const avatar = "https://randomuser.me/api/portraits/women/95.jpg";
const online = true;

    function Contact() {
    return (
        <div className='Contact'>
            <img className ="avatar" src={avatar} alt=""></img>
            <div className="name">{name}</div>
            <p className="status" >{online ? "online" : "offline"}</p>
            


        </div>
    )
    
    }

    export default Contact;