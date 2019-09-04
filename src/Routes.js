import React from "react";
import { Switch, Route } from "react-router-dom";
import HeroesList from "./containers/HeroesList";
import HeroPage from "./containers/HeroPage";

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HeroesList} />
		<Route path="/hero/:id" component={HeroPage} />
	</Switch>
);

export default Routes;
