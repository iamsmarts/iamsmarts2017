import React, {Component} from 'react';



class ProjectAbout extends Component{
	constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            gallery: []
        };
    }
    componentDidMount(){
    	this.setState({gallery: this.props.galleryData});
    }
	render(){
		const galData = this.state.gallery.map((img) => {
            return (
				<a href="#" className="thumbnail" key={img.id}>
					<img src={img.src} alt={img.description} />
				</a>
            )
        });
		return(
			<section className="about col-xs-12">
				<article className="about-wrap col-xs-12 col-sm-8">
					<h2>About the Project:</h2>
					<p>{this.props.description}</p>
					<div className="case-gallery">
						{galData}
					</div>
				</article>
				<aside className="skills-wrap col-xs-12 col-sm-4">
					<h3>Who:</h3>
					<p>{this.props.name}</p>
					<h3>Where:</h3>
					<p>{this.props.shop}</p>
					<h3>Link:</h3>
					<p><a href={this.props.link}>{this.props.linkCopy}</a></p>
				</aside>
			</section>
		)
	}
}
export default ProjectAbout;