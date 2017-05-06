import React, {Component} from 'react';

class LandingAside extends Component{
	render(){
		return(
			<aside className="skills-wrap col-xs-12 col-sm-4">
				<h3>HTML5 / CSS3</h3>
				<ul>
					<li>SCSS</li>
					<li>Bootstrap / Foundation</li>
				</ul>
				<h3>JS</h3>
				<ul>
					<li>Vanilla / ES6</li>
					<li>React js/ Handlebars </li>
					<li>Jquery / GSAP</li>
				</ul>
				<h3>Tools</h3>
				<ul>
					<li>Command Line</li>
					<li>Grunt / Gulp / Webpack</li>
					<li>NPM / YARN / Git</li>
					<li>Git / SVN</li>
					<li>Chrome dev tools / Firebug</li>
					<li>Photoshop / Illustrator</li>
				</ul>
				<p>Text editor of choice : <strong>Sublime Text 3</strong></p>
			</aside>
		)
	}
}
export default LandingAside;