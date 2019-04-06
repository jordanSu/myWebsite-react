import React from 'react';
import contents from './Skills_content';

function SkillItem(props) {
  return (
    <div class="col-md-6 animate-box" data-animate-effect={props.id % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}>
      <div class="progress-wrap">
        <h3>{props.title}</h3>
        <div class="progress">
          <div class={`progress-bar color-${props.id+1}`} role="progressbar" aria-valuenow={props.value}
            aria-valuemin="0" aria-valuemax="100" style={{ width: `${props.value}%` }}>
            <span>{`${props.value}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills(props) {
  const skillList = contents.map((item, index) =>
    <SkillItem key={item.title} id={index} title={item.title} value={item.value} />
  );
  return (
    <section class="colorlib-skills" data-section="skills">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span class="heading-meta">My Specialty</span>
            <h2 class="colorlib-heading animate-box">My Skills</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <p>This is the list of the programming languages or frameworks I use.</p>
          </div>
          {skillList}
        </div>
      </div>
    </section>
  );
}

export default Skills;