import React from "react";
import { connect } from "react-redux";
import * as HeroesListActions from "../actions/HeroesListActions";
import HeroPagePresentational from "../components/HeroPage/HeroPage";

const mapStateToProps = state => {
	return {
		heroes: state.HeroesListReducer.heroes,
		loading: state.HeroesListReducer.loading
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: () => dispatch(HeroesListActions.fetchData()),
	setHeroes: (heroes) => dispatch(HeroesListActions.setHeroes(heroes))
});

const HeroPageConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeroPagePresentational);

const HeroPage = props => <HeroPageConnect {...props} />;

export default HeroPage;
