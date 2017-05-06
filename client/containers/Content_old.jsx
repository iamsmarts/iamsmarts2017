import React, {Component} from 'react';
import About from '../containers/About.jsx';
import LandingContent from '../containers/LandingContent.jsx';
import ProjectAbout from '../containers/ProjectAbout.jsx';
import Contact from '../containers/Contact.jsx';

class Content extends Component{
   componentDidMount() {
      console.log('is this landing?',this.props.isLanding)
   }
	render(){
		const isLanding = this.props.isLanding;
		let contentToDisplay = null;
		if (isLanding) {
			contentToDisplay = <LandingContent />
		}else{
			contentToDisplay = <ProjectAbout 
			copy='Developed both the teaser site and the launch site for Marvels Doctor Strange theatrical release.'
			title='Marvels Doctor Strange'
			shop='ignition Creative'
			link='https://marvel.com/doctorstrange'
			linkCopy='marvel.com/doctorstrange'
			galleryData=
			{[
				{
					id:1,
					src:'../client/assets/images/drstrange/ds-teaser-desktop.png',
					description:'my cool img',
				},
				{
					id:2,
					src:'../client/assets/images/drstrange/ds-desktop-explore.png',
					description:'my way cool img',
				},
				{
					id:3,
					src:'../client/assets/images/drstrange/ds-desktop-gallery.png',
					description:'my way cool img',
				},
				{
					id:4,
					src:'../client/assets/images/drstrange/ds-desktop-return.png',
					description:'my way cool img',
				},
			]}
			 />
		}
		return(
			<main className="row">
				{contentToDisplay}
				<Contact />
			</main>
			
		);
	}
}
export default Content;