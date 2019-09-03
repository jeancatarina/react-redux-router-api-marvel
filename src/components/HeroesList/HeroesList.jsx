import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/heroesListAction";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { LinkContainer } from "react-router-bootstrap";

const size = {
	MEDIUM: "300px"
};

const createCardAvatar = thumbnail => (
	<Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} />
);

const createCardBody = hero => (
	<Card.Body>
		<Card.Title>{hero.name}</Card.Title>
		<Card.Text>{hero.description}</Card.Text>
		<LinkContainer to={`/hero/${hero.id}`}>
			<Button variant="primary">
				Mais Detalhes
			</Button>
		</LinkContainer>
	</Card.Body>
);

const createHeroes = heroes => (
	<CardColumns>
		{heroes.map(hero => (
			<Card key={hero.id} style={{ width: size.MEDIUM }}>
				{createCardAvatar(hero.thumbnail)}
				{createCardBody(hero)}
			</Card>
		))}
	</CardColumns>
);

const createLoading = () => (
	<div className="text-center">
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>
);

const getHeroes = heroes => heroes && createHeroes(heroes);

function HeroesList(props) {
	const { heroes, loading } = props;

	useEffect(() => {
		if (!heroes) {
			props.fetchData();
		}
	}, []);

	return loading === false ? <>{getHeroes(heroes)}</> : createLoading();
}

const mapStateToProps = state => {
	return {
		heroes: state.heroesListReducer.heroes,
		loading: state.heroesListReducer.loading
	};
};

const mapDispatchToProps = dispatch => ({
	fetchData: () => dispatch(fetchData())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeroesList);
