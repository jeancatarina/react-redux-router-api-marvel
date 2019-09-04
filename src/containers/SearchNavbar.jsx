import React from "react";
import { connect } from "react-redux";
import * as HeroesListActions from "../actions/HeroesListActions";
import SearchNavbarPresentational from "../components/SearchNavbar/SearchNavbar";

const mapStateToProps = state => {
	return {
		heroes: state.HeroesListReducer.heroes,
		loading: state.HeroesListReducer.loading
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: searchedName =>
		dispatch(HeroesListActions.fetchData(searchedName))
});

const SearchNavbarConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchNavbarPresentational);

const SearchNavbar = props => <SearchNavbarConnect {...props} />;

export default SearchNavbar;
