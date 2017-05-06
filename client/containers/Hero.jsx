import React, {Component} from 'react';
import LandingCopy from '../containers/LandingCopy.jsx';


class Hero extends Component{
   componentDidMount() {
      console.log('is this landing?',this.props.isLanding)
   }
	render(){
		const isLanding = this.props.isLanding;
		let displayCopy = null;
		if (isLanding) {
			displayCopy = <LandingCopy/>
		}
		return(
			<div className="row hero">
				<div className="copy-wrap">
					<h1>{this.props.heroTitle}</h1>
					<p className="last-hero"><em>{this.props.heroSubCopy} <a href={this.props.heroLink}>{this.props.heroLinkCopy}</a>.</em></p>
					<hr />
					{displayCopy}
				</div>
			</div>
		);
	}
}
export default Hero;