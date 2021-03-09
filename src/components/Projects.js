import React from 'react';
import { ImGithub, ImArrowUp2  } from "react-icons/im";


const Project = ({data})=> {
    return (
            <div className='projects-page'>
              <h1>My Projects</h1>
            {data.map((item) => {
                const { name, stack,decs, github, link } = item;
                return (
                    <div className="project-page-item"> 
                        <div className="item-info">
                            <div className='header'>
                                <h1>{name}</h1>
                                <h4> {'{ '}{stack} {' }'}</h4>
                            </div>
                            <p className="text">{decs}</p>
                            <div className='links'>
                                <p><a href={github} target="_blank" rel="noreferrer"><ImGithub /></a></p>
                                <button><a href={link} target="_blank" rel="noreferrer">VIEW SITE</a></button>
                            </div>
                        </div>
                    </div>
                )

            })}
            <p><a href='#top'><ImArrowUp2/></a></p>
            </div>
        )
    
}

export default Project;