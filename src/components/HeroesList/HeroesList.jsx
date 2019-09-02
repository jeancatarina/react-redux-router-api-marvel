import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/heroesListAction";

const createAvatar = thumbnail => (
	<img
		width="128"
		height="128"
		src={`${thumbnail.path}.${thumbnail.extension}`}
	/>
);

const createHeroes = heroes => (
	<div>
		{heroes.map(hero => (
			<div key={hero.id}>
				{createAvatar(hero.thumbnail)}
				{hero.name}
			</div>
		))}
	</div>
);

const getHeroes = heroes => heroes && createHeroes(heroes);

function HeroesList(props) {
	const {
		heroesListReducer: { result: heroes }
	} = props;

	const fetchData = () => {
		props.fetchData();
	};

	return (
		<div>
			<button onClick={fetchData}>Test redux action</button>
			{getHeroes(heroes)}
		</div>
	);
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	fetchData: () => dispatch(fetchData())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeroesList);
