import React from "react";
import HeroesList from "./components/HeroesList/HeroesList";
import SearchNavbar from "./components/SearchNavbar/SearchNavbar";

const App = props => {
	return (
		<div>
			<SearchNavbar />
			<HeroesList />
		</div>
	);
};

export default App;
