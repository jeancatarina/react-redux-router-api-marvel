import React from "react";
import { connect } from "react-redux";
import * as HeroesListActions from "../actions/HeroesListActions";
import HeroesListPresentational from "../components/HeroesList/HeroesList";

const mapStateToProps = state => {
	return {
		heroes: state.HeroesListReducer.heroes,
		loading: state.HeroesListReducer.loading
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: () => dispatch(HeroesListActions.fetchData())
});

const HeroesListConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeroesListPresentational);

const HeroesList = props => <HeroesListConnect {...props} />;

export default HeroesList;
