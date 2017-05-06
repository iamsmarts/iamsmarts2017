import React, {Component} from 'react';
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory} from 'react-router';
import Header from '../containers/Header.jsx';
import ContentContainer from '../containers/ContentContainer.jsx';
import Contact from '../containers/Contact.jsx';
import Footer from '../containers/Footer.jsx';


class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		    <div>
		    	<Header />
				{this.props.children}
				<Contact />
				<Footer />
		    </div>
		)
	}
}
export default App;