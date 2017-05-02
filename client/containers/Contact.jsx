import React, {Component} from 'react';
import Recommendations from '../containers/Recommendations.jsx';
import ContactInfo from '../containers/ContactInfo.jsx';


class Contact extends Component{
	render(){
		return(
			<div className="cr-wrap">
				<Recommendations />
				<ContactInfo />
			</div>
			
		);
	}
}
export default Contact;