import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import { Redirect } from "react-router-dom";

const size = {
	MEDIUM: "300px",
	BIG: "100%"
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
	<div key={`tvShows${key}`}>{createCardBody(serie)}</div>
);

const createHero = hero => (
	<Card key={hero.id} style={{ width: size.BIG }}>
		{createCardAvatar(hero.thumbnail)}
		{createCardBody(hero)}
	</Card>
);

const createCard = hero => (
	<CardColumns>
		{createHero(hero)}
		<h1>{`As 20 primeiras séries do ${hero.name}`}</h1>
		{hero.series.items.map((serie, key) => createTvShows(serie, key))}
	</CardColumns>
);

const emptyState = () => (
	<Redirect
		to={{
			pathname: "/"
		}}
	/>
);

const getCurrentHero = (heroes, heroId) =>
	heroes && heroes.find(hero => hero.id.toString() === heroId);

const HeroPage = props => {
	const { heroes } = props;
	const heroId = props.match.params.id;
	const hero = getCurrentHero(heroes, heroId);

	return hero ? createCard(hero) : emptyState();
};

export default HeroPage;
