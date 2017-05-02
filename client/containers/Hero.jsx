import React, {Component} from 'react';

class Hero extends Component{
	render(){
		return(
			<div className="row hero">
				<div className="copy-wrap">
					<h1>Hi, I am Rudy Quevedo the Frontend guy.</h1>
					<p className="last-hero"><em>Currently located in Los Angeles, and available for hire. checkout my <a href="#">CV</a></em></p>
					<hr />
					<div className="contact-icons">
						<a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
						<a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		);
	}
}
export default Hero;