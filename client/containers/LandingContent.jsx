import React, {Component} from 'react';
import Hero from '../containers/Hero.jsx';
import LandingAbout from '../containers/LandingAbout.jsx';
import Portfolio from '../containers/Portfolio.jsx';


class LandingContent extends Component{
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
				<main className="row">
					<LandingAbout />
					<Portfolio 
						caseData = {[
					     	{
				        		id:1,
				        		class:'project-wrap col-xs-12 col-sm-5 case1',
				        		name:'Ignition Creative',
				        		description:'HTML5, CSS3, Foundation5, jquery, Expression Engine',
				        		link:'ignition-creative',
				        		linkDescription:'SEE DETAILS',
				        	},
				        	{
				        		id:2,
				        		class:'project-wrap col-xs-12 col-sm-7 case2',
				        		name:'Doctor Strange',
				        		description:'HTML5, SCSS, Javascript ',
				        		link:'dr-strange',
				        		linkDescription:'SEE DETAILS',
				        	},
				        	{
				        		id:3,
				        		class:'project-wrap col-xs-12 col-sm-7 case3',
				        		name:'ABCmouse JS Games',
				        		description:'Vanilla JavaScript',
				        		link:'abcmouse-games',
				        		linkDescription:'SEE DETAILS',
				        	},
				        	{
				        		id:4,
				        		class:'project-wrap col-xs-12 col-sm-5 case4',
				        		name:'FOX FYC EMMYS',
				        		description:'HTML5, CSS3, Jquery, Laravel4',
				        		link:'fox-emmmy',
				        		linkDescription:'SEE DETAILS',
				        	},
						]}
					/>
				</main>
			</div>

		);
	}

}
export default LandingContent;