import React from 'react';

function MessageBox(props) {
  return (
    <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
      <div class="timeline-entry-inner">
        <div class="timeline-icon color-1">
          <i class="icon-pen2"></i>
        </div>

        <div class="timeline-label">
          <h2>{props.name}</h2>
          <p>{props.message}</p>
        </div>
      </div>
    </article>
  );
}

class Messageboard extends React.Component {
  render() {
    /* const messageList = this.props.messages.map((item, index) =>
      <MessageBox key={index} name={item.name} message={item.message} />
    ); */

    const messageList = [
      <MessageBox key={0} name={'Jordan'} message={'This is a test'} />,
      <MessageBox key={1} name={'Jordan'} message={'This is a test'} />
    ];
    return (
      <section class="colorlib-contact" data-section="messageboard">
        <div class="colorlib-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta">Leave a message</span>
              <h2 class="colorlib-heading">Message Board</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2 col-md-pull-2 animate-box" data-animate-effect="fadeInRight">
              <form action="">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                  <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-primary btn-send-message" value="Send Message" />
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="timeline-centered">
                {messageList}

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
}

export default Messageboard;