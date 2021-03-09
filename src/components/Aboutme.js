import React from 'react';



const Aboutme =()=>{
        return (
            <div className='aboutme-page'>
                <h1>About Me</h1>
                <p>Enthusiastic frontend developer based in London.
                I love building dynamic and responsive websites and apps using <b>React</b>, <b>JavaScript</b>, <b>HTML</b> and <b>CSS</b>.
                I also chalenge myself with complex projects which helps me sharpen my problem solving skills.</p>
                <p>If I'm not in front of the computer, you can find me cooking or outside traveling, hiking and occasionally bee-keeping.</p>
                <div className="location-section">
                    <div className="location">
                        <h1>Location</h1>
                        <p>London, UK</p>
                    </div>
                    <div className="quote">
                        <q>Sky is the limit.</q>
                    </div>
                </div>
                
            </div>
        )
    
}

export default Aboutme;