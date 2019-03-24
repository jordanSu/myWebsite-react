import React, { Component } from 'react';

import Navbar from './Navbar';

import Home from './main/Home';
import About from './main/About';
import Services from './main/Services';
import Skills from './main/Skills';
import Education from './main/Education';
import Experience from './main/Experience';
import Work from './main/Work';
import Blog from './main/Blog';
import Contact from './main/Contact';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
		    <div className="container-wrap">
          <Navbar />
          <div id="colorlib-main">
            <Home />
            <About />
            <Services />
            <Skills />
            <Education />
            <Experience />
            <Work />
            <Blog />
            <Contact />
          </div>
	  </div> 
    </div>); 
    
  }
}

export default App;
