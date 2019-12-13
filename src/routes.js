import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Navbar, Footer, Signup, Todo, UserTasks, Users } from './components';

const Routes = () => (
	<div>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Signup} />
			<Route exact path="/navbar" component={Navbar} />
			<Route path="/signup" component={Signup} />
			<Route path="/todo" component={Todo} />
			<Route path="/users" component={Users} />
			<Route path="/userTasks" component={UserTasks} />
			<Route path="/footer" component={Footer} />
			<Redirect to="/" />
		</Switch>
		{/* <Footer /> */}
	</div>
);

export default Routes;
