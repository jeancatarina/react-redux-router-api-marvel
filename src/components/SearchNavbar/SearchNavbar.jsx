import React, { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { fetchData } from "../../actions/heroesListAction";
import { connect } from "react-redux";

const key = {
	ENTER: 13,
	MOUSE: undefined
};

const searchHeroes = (props, searchInputRef, event) => {
	if (event.charCode === key.ENTER || event.charCode === key.MOUSE) {
		props.fetchData(searchInputRef.current.value);
	}
};

const searchInput = (props, searchInputRef) => (
	<FormControl
		ref={searchInputRef}
		type="text"
		placeholder="Search"
		className="mr-sm-2"
		onKeyPress={searchHeroes.bind(this, props, searchInputRef)}
	/>
);

const searchButton = (props, searchInputRef) => (
	<Button
		variant="outline-info"
		onClick={searchHeroes.bind(this, props, searchInputRef)}
	>
		Search
	</Button>
);

const createSearch = (props, searchInputRef) => (
	<Form inline onSubmit={e => e.preventDefault()}>
		{searchInput(props, searchInputRef)}
		{searchButton(props, searchInputRef)}
	</Form>
);

const createPageButtons = () => (
	<Nav className="mr-auto">
		<Nav.Link href="#home">Home</Nav.Link>
	</Nav>
);

const createHomeLogo = () => (
	<Navbar.Brand href="#home">Marvel Heroes</Navbar.Brand>
);

const SearchNavbar = props => {
	const searchInputRef = useRef(null);

	return (
		<Navbar bg="light" variant="light">
			{createHomeLogo()}
			{createPageButtons()}
			{createSearch(props, searchInputRef)}
		</Navbar>
	);
};

const mapStateToProps = state => {
	return {
		heroes: state.heroesListReducer.heroes,
		loading: state.heroesListReducer.loading
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: searchedName => dispatch(fetchData(searchedName))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchNavbar);
