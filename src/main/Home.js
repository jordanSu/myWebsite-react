import React from 'react';
import bg1_pic from '../images/img_bg_1.jpg';
import bg2_pic from '../images/img_bg_2.jpg';

class Home extends React.Component {
	render() {
		return (
			<section id="colorlib-hero" className="js-fullheight" data-section="home">
				<div className="flexslider js-fullheight">
					<ul className="slides">
						<li style={{ backgroundImage: `url(${bg1_pic})` }}>
							<div className="overlay"></div>
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
										<div className="slider-text-inner js-fullheight">
											<div className="desc">
												<h1>Hi! <br />I'm Jackson</h1>
												{/* <h2>100% html5 bootstrap templates Made by <a rel="noopener noreferrer" href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
												<p><a className="btn btn-primary btn-learn">Download CV <i className="icon-download4"></i></a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li style={{ backgroundImage: `url(${bg2_pic})` }}>
							<div className="overlay"></div>
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
										<div className="slider-text-inner">
											<div className="desc">
												<h1>I am <br />a Designer</h1>
												{/* <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
												<p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3"></i></a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}

export default Home;