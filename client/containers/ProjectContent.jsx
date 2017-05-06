import React, {Component} from 'react';
import Projects from '../data/Projects.js';
import Hero from '../containers/Hero.jsx';
import ProjectAbout from '../containers/ProjectAbout.jsx';



class ProjectContent extends Component{
	constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            projectData: {}
        };
    }
    componentWillMount() {
    	for (var i = 0; i < Projects.length; i++) {
    		if (Projects[i].slug === this.props.params.id) {
    			this.setState({projectData: Projects[i]});
    		}
    	}
    }
    componentDidUpdate() {
	  window.scrollTo(0,0);
	}
	render(){
		return(
			<div>
				<Hero 
					className="caseHero"
					heroTitle={this.state.projectData.name} 
					heroSubCopy={this.state.projectData.heroSub}  
					isLanding={false}
				/>
				<main className="row">
					<ProjectAbout 
						description={this.state.projectData.description}
						galleryData={this.state.projectData.galleryData} 
						name={this.state.projectData.name} 
						shop={this.state.projectData.shop} 
						link={this.state.projectData.link} 
						linkCopy={this.state.projectData.linkCopy} 
					/>
				</main>
			</div>

		);
	}

}
export default ProjectContent;