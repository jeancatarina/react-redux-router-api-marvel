import React, { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { fetchData } from "../../actions/heroesListAction";
import { connect } from "react-redux";

const searchHeroes = (props, searchInput) => {
	props.fetchData(searchInput.current.value);
};

const createSearch = (props, searchInput) => (
	<Form inline>
		<FormControl
			ref={searchInput}
			type="text"
			placeholder="Search"
			className="mr-sm-2"
		/>
		<Button
			variant="outline-info"
			onClick={searchHeroes.bind(this, props, searchInput)}
		>
			Search
		</Button>
	</Form>
);

const SearchHeroes = props => {
	const searchInput = useRef(null);

	return (
		<Navbar bg="light" variant="light">
			<Navbar.Brand href="#home">Marvel Heroes</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
			</Nav>
			{createSearch(props, searchInput)}
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
)(SearchHeroes);
