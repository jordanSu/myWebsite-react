import React from 'react';

var skills = ['Design Thinking', 'Web Application', 'System Admin.', 'Cybersecurity'];

export default function About(props) {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p><strong>Hi I'm Jordan Su</strong></p>
                  <p>A student study for master degree of Information Management at National Taiwan University</p>
                  <p>I want to be an advanced developer with a global vision, I am looking forward to collaborating with partners from all over the world.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                <div className="services color-1">
                  <span className="icon2"><i className="icon-bulb"></i></span>
                  <h3>{skills[0]}</h3>
                </div>
              </div>
              <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                <div className="services color-4">
                  <span className="icon2"><i className="icon-phone3"></i></span>
                  <h3>{skills[1]}</h3>
                </div>
              </div>
              <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                <div className="services color-3">
                  <span className="icon2"><i className="icon-data"></i></span>
                  <h3>{skills[2]}</h3>
                </div>
              </div>
              <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                <div className="services color-2">
                  <span className="icon2"><i className="icon-globe-outline"></i></span>
                  <h3>{skills[3]}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}