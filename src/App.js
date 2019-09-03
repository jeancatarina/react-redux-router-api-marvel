import React from "react";
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
