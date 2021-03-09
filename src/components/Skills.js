import React from 'react';



const Skills = () => (
    <div className='skills-page'>
        <div className='skills'>
            <h1>SKILLS</h1>
            <div className='skill-info'>
                <h3>Languages </h3>
                <p>HTML5, CSS3, JavaScript, PHP</p>
                <h3>Technologies</h3>
                <p>ReactJS, Bootstrap, Redux, jQuery, MySQL, NodeJs, Angular</p>
                <h3>Microservices</h3>
                <p>JSON, API</p>
                <h3>Cloud</h3>
                <p>Firebase, Netlify</p>
                <h3>Devops Tools</h3>
                <p>Git, Testing</p>
            </div>
        </div>
        <div className='skills-hr' style={{ width: '70%', margin: 'auto', color:'#2d2f33' }}>

        </div>
        <div className='education'>
            <h1>EDUCATION</h1>
            <div className='education-info'>
                <p><span>2020</span> - React - The Complete Guide. Covering React/Redux, React Routing and React Animations.</p>
                <p><span>2018 - 2020</span> - Numerous courses from Udemy and Udacity. Topics : Responsive Web Design, Responsive Images, OOP JavaScript, ReactJS...</p>
                <p><span>2017</span> - Sky Get into Tech - 15 week course for learning web development. Covering basics of HTML, CSS, JavaScript, PHP, OOP and MySQL.</p>
            </div>
        </div>
    </div>
)

export default Skills;