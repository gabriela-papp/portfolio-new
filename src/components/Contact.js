import React from 'react';
import { ImGithub, ImLinkedin2, ImCodepen, ImPhone, ImMail } from "react-icons/im";


const Contact = () => {
    return (
        <div className='contact-page'> 
            
            <h1>Contact Me</h1>     
            <ul>
                <li><a href="https://github.com/gabriela-papp" target="_blank" rel="noreferrer"><ImGithub /></a></li>
                <li><a href="https://codepen.io/papp"
                    target="_blank" rel="noreferrer"><ImCodepen /></a></li>
                <li><a href="https://www.linkedin.com/in/gabriela-papp-14b633132/"
                    target="_blank" rel="noreferrer"><ImLinkedin2 /></a></li>
                <li><a href="+447895467238"
                    target="_blank" rel="noreferrer"><ImPhone /></a></li>
                <li><a href="mailto:gpgabika@gmail.com"
                    target="_blank" rel="noreferrer"><ImMail /></a></li>
            </ul>
                                
        </div>
    )

}

export default Contact;