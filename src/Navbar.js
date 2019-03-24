import React from 'react';
import about_me_pic from './images/about.jpg';

class Navbar extends React.Component {
  render() {
    return (
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: `url(${about_me_pic})` }}></div>
          <h1 id="colorlib-logo"><a href="index.html">Jackson Ford</a></h1>
          <span className="position"><a href="#">UI/UX/Designer</a> in Philippines</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{marginBottom: "30px"}}>
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><a href="#" data-nav-section="home">Home</a></li>
              <li><a href="#" data-nav-section="about">About</a></li>
              <li><a href="#" data-nav-section="services">Services</a></li>
              <li><a href="#" data-nav-section="skills">Skills</a></li>
              <li><a href="#" data-nav-section="education">Education</a></li>
              <li><a href="#" data-nav-section="experience">Experience</a></li>
              <li><a href="#" data-nav-section="work">Work</a></li>
              <li><a href="#" data-nav-section="blog">Blog</a></li>
              <li><a href="#" data-nav-section="contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <div className="colorlib-footer">
          <p>
            <small>&copy; Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></small>
          </p>
        </div>
      </aside>
    );
  }
}

export default Navbar;