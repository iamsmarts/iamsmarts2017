import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory} from 'react-router';
import App from './components/App.jsx';
import LandingContent from './containers/LandingContent.jsx';
import ProjectContent from './containers/ProjectContent.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={LandingContent}/>
			<Route path={"home"} component={LandingContent}></Route>
			<Route path={"projects/:id"} component={ProjectContent}></Route>
		</Route>
	</Router>, 
	document.getElementById('wrapper')
	);