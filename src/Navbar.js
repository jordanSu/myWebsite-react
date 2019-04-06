import React from 'react';
import about_me_pic from './images/about.jpg';
import YourVisitCounter from './widget/YourVisitCounter';
import TotalVisitCounter from './widget/TotalVisitCounter';

class Navbar extends React.Component {
  render() {
    const items = this.props.pages.map((page) =>
      <li key={page.type.name}><a href="#" data-nav-section={page.type.name.toLowerCase()}>{page.type.name}</a></li>
    );
    return (
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: `url(${about_me_pic})` }}></div>
          <h1 id="colorlib-logo"><a href="index.html">Jordan Su</a></h1>
          <span className="position"><a href="#">Software Developer</a> in Taiwan</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{marginBottom: '70px'}}>
          <div id="navbar" className="collapse">
            <ul>
              {items}
            </ul>
          </div>
        </nav>
        <div className="colorlib-footer">
          <YourVisitCounter />
          <TotalVisitCounter />
          <p>
            <small>&copy; Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></small>
          </p>
        </div>
      </aside>
    );
  }
}

export default Navbar;