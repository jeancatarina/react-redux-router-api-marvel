import React from "react";
import {
	Button,
	Card,
	CardColumns,
	FormControl,
	InputGroup
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

const size = {
	MEDIUM: "300px",
	BIG: "100%"
};

const createCardAvatar = thumbnail => (
	<Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} />
);

const createCardTitleInput = name => (
	<Card.Title>
		<InputGroup className="mb-3">
			<FormControl placeholder="De um nome a esse herói" value={name} />
			<InputGroup.Append>
				<Button variant="outline-secondary">Alterar</Button>
			</InputGroup.Append>
		</InputGroup>
	</Card.Title>
);

const createTvShowTitle = name => <Card.Title>{name}</Card.Title>;

const createCardBody = card => {
	if (card.id) {
		return (
			<Card.Body>
				{createCardTitleInput(card.name)}
				<Card.Text>{card.description}</Card.Text>
			</Card.Body>
		);
	}

	return <Card.Body>{createTvShowTitle(card.name)}</Card.Body>;
};

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

export default React.memo(HeroPage);
