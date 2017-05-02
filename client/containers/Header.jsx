import React, {Component} from 'react';

class Header extends Component{
	render(){
		return(
			<header>
				<div className="col-xs-6 col-md-3">
					<a href="#"><p>iamsmarts.com</p></a>
				</div>
				<div className="col-xs-6 col-md-3">
					<a href="#" className="pull-right"><p>MENU <i className="fa fa-bars" aria-hidden="true"></i></p></a>
				</div>
			</header>
		);
	}
}
export default Header;