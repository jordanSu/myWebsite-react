import React, { Component } from 'react';
import { CookiesProvider } from 'react-cookie';
import Navbar from './Navbar';

import Home from './main/Home';
import About from './main/About';
import Services from './main/Services';
import Skills from './main/Skills';
import Education from './main/Education';
import Experience from './main/Experience';
import Work from './main/Work';
import MessageBoard from './main/Messageboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [<Home />, <About />, <Skills />, <Education />,
      <Experience />, <MessageBoard />]
    };
  }

  render() {
    const pages = this.state.pages.map((page) =>
      <span key={page.type.name}>{page}</span>
    );
    return (
      <CookiesProvider>
        <div id="colorlib-page">
          <div className="container-wrap">
            <Navbar pages={this.state.pages} />
            <div id="colorlib-main">
              {pages}
            </div>
          </div>
        </div>
      </CookiesProvider>
    );
  }
}

export default App;
