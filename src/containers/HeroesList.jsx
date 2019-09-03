import React from "react";
import { connect } from "react-redux";
import HeroesListActions from "../actions/HeroesListAction";
import HeroesListPresentational from "../components/HeroesList";

const mapStateToProps = state => {
	return {
		heroes: state.heroesListReducer.heroes,
		loading: state.heroesListReducer.loading
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: () => dispatch(HeroesListActions.fetchData())
});

const HeroesListConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeroesListPresentational);

const HeroesList = () => (
	<HeroesListConnect ref={"HeroesList"} {...this.props} />
);

export default HeroesList;
