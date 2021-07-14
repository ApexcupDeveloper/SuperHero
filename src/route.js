import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './screens/Home';
import SearchPage from './screens/Search';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={HomePage} />
                <Route exact path='/search' component={SearchPage} />
			</Switch>
		</Router>
	)
};

export default AppRouter;