import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

const size = {
	MEDIUM: "300px",
	BIG: "500px"
};

const createCardAvatar = thumbnail => (
	<Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} />
);

const createCardBody = card => (
	<Card.Body>
		<Card.Title>{card.name}</Card.Title>
		<Card.Text>{card.description}</Card.Text>
	</Card.Body>
);

const createTvShows = (serie, key) => (
	<Card key={`tvShows${key}`} style={{ width: size.MEDIUM }}>
		{createCardBody(serie)}
	</Card>
);

const createHeroes = hero => (
	<CardColumns>
		<Card key={hero.id} style={{ width: size.BIG }}>
			{createCardAvatar(hero.thumbnail)}
			{createCardBody(hero)}
		</Card>
		<h1>{`As 20 primeiras séries do ${hero.name}`}</h1>
		{hero.series.items.map((serie, key) => createTvShows(serie, key))}
	</CardColumns>
);

const emptyState = () => (
	<>
		Ops... Herói não encontrado. Você pode pesquisar por ele ou desapegar e
		ir na home.
	</>
);

const getCurrentHero = (heroes, heroId) =>
	heroes && heroes.find(hero => hero.id.toString() === heroId);

const HeroPage = props => {
	const { heroes } = props;
	const heroId = props.match.params.id;
	const hero = getCurrentHero(heroes, heroId);

	return hero ? createHeroes(hero) : emptyState();
};

const mapStateToProps = state => {
	return {
		heroes: state.heroesListReducer.heroes
	};
};

export default connect(mapStateToProps)(HeroPage);
