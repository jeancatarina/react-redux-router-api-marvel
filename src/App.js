import React from "react";
import HeroesList from "./components/HeroesList/HeroesList";
import SearchHeroes from "./components/SearchHeroes/SearchHeroes";

const App = props => {
	return (
		<div>
			<SearchHeroes />
			<HeroesList />
		</div>
	);
};

export default App;
