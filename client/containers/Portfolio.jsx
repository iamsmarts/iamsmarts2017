import React, {Component} from 'react';
import {Link} from 'react-router';

class Portfolio extends Component{
	constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            cases: []
        };
    }
    componentDidMount(){
        // Update state
        this.setState({cases: this.props.caseData});
    }
    componentDidUpdate(){

    }
	render(){
		const projects = this.state.cases.map((project) => {
            return (
                <article className={project.class} id={project.id} key={project.id}>
					<h3>{project.name}</h3>
					<p>{project.description}</p>
					<Link to={`/projects/${project.link}`} className="portfolio-btn">{project.linkDescription}</Link>
				</article>
            )
        });
		return(
			<section className="portfolio col-xs-12">
				<h2 className="portfolio-head-title">Portfolio:</h2>
				<p className="hidden-xs portfolio-head-copy">checkout some of my recent work.</p>
				{projects}
			</section>
		);
	}
}
export default Portfolio;