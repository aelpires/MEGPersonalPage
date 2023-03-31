import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Services from './Services';


const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection nav={nav} handleNav={handleNav} />
        <About />
        {/* This is a comment with a code snippet */}
        {/* <Skills /> */}
        <Services />
        <Contact />
    </div>
  )
};

export default Main;
