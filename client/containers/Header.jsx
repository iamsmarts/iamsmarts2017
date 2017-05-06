import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
	render(){
		return(
			<header>
				<div className="col-xs-6 col-md-3">
					<Link to="/home"><p>iamsmarts.com</p></Link>
				</div>
				<div className="col-xs-6 col-md-3 pull-right">
					<a href="#" className="pull-right"><p>MENU <i className="fa fa-bars" aria-hidden="true"></i></p></a>
				</div>
			</header>
		);
	}
}
export default Header;