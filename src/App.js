import React from "react";
import HeroesList from "./components/HeroesList/HeroesList";
import SearchNavbar from "./components/SearchNavbar/SearchNavbar";
import Routes from "./Routes";

const App = props => {
	return (
		<div>
			<SearchNavbar />
			<Routes />
		</div>
	);
};

export default App;
