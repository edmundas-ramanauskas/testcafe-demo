import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Options from './containers/Options';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/options" component={Options} />
	</Switch>
);
