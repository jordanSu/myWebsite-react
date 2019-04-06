import React from 'react';
import contents from './Education_content';

function Degree(props) {
  const id = props.id;
  const collapse = props.collapse;
  const title = props.title;
  const description = props.description;
  if (collapse) {
    return (
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id={'id' + id}>
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href={'#' + id} aria-expanded="true" aria-controls={id}>{title}
            </a>
          </h4>
        </div>
        <div id={id} class="panel-collapse collapse in" role="tabpanel" aria-labelledby={'id' + id}>
          <div class="panel-body">
            {description}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="panel panel-default">
        <div class="panel-heading" role="tab" id={'id' + id}>
          <h4 class="panel-title">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href={'#' + id} aria-expanded="false" aria-controls={id}>{title}
            </a>
          </h4>
        </div>
        <div id={id} class="panel-collapse collapse" role="tabpanel" aria-labelledby={'id' + id}>
          <div class="panel-body">
            {description}
          </div>
        </div>
      </div>
    );
  }
}

function Education(props) {
  const content_list = contents.map((item, index) =>
    <Degree collapse={index === 0 ? true : false} key={item.title} id={'Edu' + index} title={item.title} description={item.content} />
  );
  return (
    <section class="colorlib-education" data-section="education">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span class="heading-meta">Education</span>
            <h2 class="colorlib-heading animate-box">Education</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div class="fancy-collapse-panel">
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {content_list}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;