import React from 'react';
import contents from './Experience_content';

function ExpItem(props) {
  return (
    <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
      <div class="timeline-entry-inner">
        <div class={"timeline-icon color-" + props.id}>
          <i class="icon-pen2"></i>
        </div>

        <div class="timeline-label">
          <h2>{props.title} <span>{props.date}</span></h2>
          <p>{props.description}</p>
        </div>
      </div>
    </article>
  );
}

function Experience(props) {
  const ExpItemList = contents.map((item, index) =>
    <ExpItem key={item.title} id={index + 1} title={item.title} date={item.date} description={item.description} />
  );
  return (
    <section class="colorlib-experience" data-section="experience">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span class="heading-meta">Experience</span>
            <h2 class="colorlib-heading animate-box" style={{marginBottom: "2em"}}>Work Experience</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="timeline-centered">
              {ExpItemList}

              <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                <div class="timeline-entry-inner">
                  <div class="timeline-icon color-none">
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;