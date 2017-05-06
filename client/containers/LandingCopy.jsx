import React, {Component} from 'react';

class LandingCopy extends Component{
	render(){
		const wipCopystyle ={
			margin:'0px',
		};
		return(
			<div className="landingCopy">
				<p className="wipCopy" style={wipCopystyle}><small>05/01/2017 - Work in Progress, built with ReactJS, HTML5, Bootstrap3, SCSS, Flexbox, Webpack, and Yarn. See code and documentation on <a href="https://github.com/iamsmarts/iamsmarts2017/" target="_blank">github</a> <em><strong>- Rudy</strong></em></small></p>
				<p className="wipCopy"><small>*things to do: add navigation, add project showcase views, add the rest of linkedin's recommendations add animations, optimize load.</small></p>
				<div className="contact-icons">
					<a href="https://www.linkedin.com/in/iamsmarts/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
					<a href="https://github.com/iamsmarts/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
					<a href="https://twitter.com/iamsmarts" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
					<a href="https://instagram.com/iamsmarts" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
				</div>
			</div>
		)
	}
}
export default LandingCopy;