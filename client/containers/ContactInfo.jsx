import React, {Component} from 'react';

class ContactInfo extends Component{
	render(){
		return(
			<section className="contact">
				<article className="col-xs-12">
					<h2>Contact Me:</h2>
					<p>The best way to reach me is through email - <a href="mailto:rudy@iamsmarts.com">rudy@iamsmarts.com</a></p>
					<p>or feel free to follow me in across social media <strong>@iamsmarts</strong></p>

				</article>
			</section>
		);
	}
}
export default ContactInfo;