import React from 'react';
import { ImGithub, ImLinkedin2, ImCodepen } from "react-icons/im";


const Home =()=>{
        return (
            <div className='home-page' style={{ width: '100%', margin: 'auto' }}>
               <h1 className='top-pad animated fadeInLeftBig'> GABRIELA PAPP</h1>
                <p className='animated fadeInLeftBig'>/ front end developer /</p>
                <p className='animated fadeInLeftBig'>HTML5 / CSS3 / JAVASCRIPT / REACT </p>
                <ul>
                    <li><a href="https://github.com/gabriela-papp" target="_blank" rel="noreferrer"><ImGithub/></a></li>
                    <li><a href="https://codepen.io/papp"
                        target="_blank" rel="noreferrer"><ImCodepen/></a></li>
                    <li><a href="https://www.linkedin.com/in/gabriela-papp-14b633132/"
                        target="_blank" rel="noreferrer"><ImLinkedin2/></a></li>
                </ul>
                <div className='hr' style={{ width: '70%', margin: 'auto' }}>

                </div>
                
            </div>
        )
    
}

export default Home;