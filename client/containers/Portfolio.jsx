import React, {Component} from 'react';

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
        // Static data
        const data = [
        	{
        		id:1,
        		class:'project-wrap col-xs-12 col-sm-5 case1',
        		name:'Ignition Creative',
        		description:'HTML5, CSS3, Foundation5, jquery, Expression Engine',
        		link:'#',
        		linkDescription:'SEE DETAILS',
        	},
        	{
        		id:2,
        		class:'project-wrap col-xs-12 col-sm-7 case2',
        		name:'Doctor Strange',
        		description:'HTML5, SCSS, Javascript ',
        		link:'#',
        		linkDescription:'SEE DETAILS',
        	},
        	{
        		id:3,
        		class:'project-wrap col-xs-12 col-sm-7 case3',
        		name:'ABCmouse JS Games',
        		description:'Vanilla JavaScript',
        		link:'#',
        		linkDescription:'SEE DETAILS',
        	},
        	{
        		id:4,
        		class:'project-wrap col-xs-12 col-sm-5 case4',
        		name:'FOX FYC EMMYS',
        		description:'HTML5, CSS3, Jquery, Laravel4',
        		link:'#',
        		linkDescription:'SEE DETAILS',
        	},
        ];
        // Update state
        this.setState({cases: data});
    }
    componentDidUpdate(){
        console.log(this.state.cases[0])

    }
	render(){
		const projects = this.state.cases.map((project) => {
            return (
                <article className={project.class} id={project.id} key={project.id}>
					<h3>{project.name}</h3>
					<p>{project.description}</p>
					<a href={project.link} className="portfolio-btn">{project.linkDescription}</a>
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