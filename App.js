// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Resume from './components/resume/resume';
import Projects from './components/project/project';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';
const App=()=> {
  return(
    <>
    <sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Projects />
      <Blog />
      <Contact />
      <Sidebar />
      
     
      
      
    </main>
    </>
  )
}

export default App;
