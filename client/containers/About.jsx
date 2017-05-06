import React, {Component} from 'react';
import LandingAbout from '../containers/LandingAbout.jsx';
import LandingAside from '../containers/LandingAside.jsx';

class About extends Component{
	render(){
		return(
			<section className="about col-xs-12">
				<article className="about-wrap col-xs-12 col-sm-8">
					<LandingAbout />
				</article>
				<LandingAside/>
			</section>
		);
	}
}
export default About;