import React from "react";
import { Switch, Route } from "react-router-dom";
import HeroesList from "./components/HeroesList/HeroesList";
import HeroPage from "./components/HeroPage/HeroPage";

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HeroesList} />
		<Route path="/hero/:id" component={HeroPage} />
	</Switch>
);

export default Routes;
