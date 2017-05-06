import React, {Component} from 'react';
import Hero from '../containers/Hero.jsx';
import Content from '../containers/Content.jsx';


class ContentContainer extends Component{
	render(){
		return(
			<div>
				<Hero 
					heroTitle='Hi, I am Rudy Quevedo the Frontend guy.' 
					heroSubCopy="Currently located in Los Angeles, and available for hire. checkout my" 
					heroLink='./client//assets/rudy-quevedo-resume-2017-current.pdf'
					heroLinkCopy='CV'
					isLanding={true}
				/>
				<Content  
					isLanding={false}
				/>
			</div>
			
		);
	}
}
export default ContentContainer;