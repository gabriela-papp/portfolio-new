import React,{useState} from 'react';
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import projects from './data'
import './App.css';

function App() {
  const [data,setData] =useState(projects)


  return (
    <div className="App">
      <Home />
      <Aboutme />
      <Skills />
      <Projects data={data}/>
      <Contact />
    
    </div>
  );
}

export default App;
