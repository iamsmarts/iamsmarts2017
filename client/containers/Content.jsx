import React, {Component} from 'react';
import About from '../containers/About.jsx';
import Portfolio from '../containers/Portfolio.jsx';
import Contact from '../containers/Contact.jsx';

class Content extends Component{
	render(){
		return(
			<main className="row">
				<About />
				<Portfolio />
				<Contact />
			</main>
			
		);
	}
}
export default Content;