import React, {Component} from 'react';

class About extends Component{
	render(){
		return(
			<section className="about col-xs-12">
				<article className="about-wrap col-xs-12 col-sm-8">
					<h2>About Me:</h2>
					<p>	For the past 10 years I have been honing in my HTML, CSS, and Javascript skills, mastering my trait as a frontend developer. All while keeping the same curiosity to learn as I had in day one. Along my journey I have had the pleasure of working in a variety of different teams, rolling my sleeves up in startups, learning the product in significant corporations such as Beachbody and Age of Learning, to keeping pace in the fast moving world of creative agencies such as Midnight Oil and Ignition Creative. These experiences have exposed me many challenges, in which have gave me a keen sense of problem solving and humble approach to working with any size team. </p>
				</article>
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
						<li>NPM / Git</li>
						<li>Chrome dev tools / Firebug</li>
						<li>Photoshop / Illustrator</li>
					</ul>
					<p>Text editor of choice : <strong>Sublime Text 3</strong></p>
				</aside>
			</section>
		);
	}
}
export default About;