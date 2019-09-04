import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Spinner from "react-bootstrap/Spinner";
import { LinkContainer } from "react-router-bootstrap";

const size = {
	MEDIUM: "300px"
};

const cardStyle = {
	width: size.MEDIUM
};

const createCardAvatar = thumbnail => (
	<Card.Img variant="top" src={`${thumbnail.path}.${thumbnail.extension}`} />
);

const createCardBody = hero => (
	<Card.Body>
		<Card.Title>{hero.name}</Card.Title>
		<Card.Text>{`${hero.description.substr(0, 100)}`}</Card.Text>
		<LinkContainer to={`/hero/${hero.id}`}>
			<Button variant="primary">Mais Detalhes</Button>
		</LinkContainer>
	</Card.Body>
);

const createHeroes = heroes => (
	<CardColumns>
		{heroes.map(hero => (
			<Card key={hero.id} style={cardStyle}>
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

const emptyState = () => (
	<div>
		{`Como assim eu não achei nada? Certamente você deve estar pesquisando
		heróis da DC. Tente pesquisar o menino aranha`}
	</div>
);

const getHeroes = heroes =>
	heroes && heroes.length ? createHeroes(heroes) : emptyState();

function HeroesList(props) {
	const { heroes, loading } = props;

	useEffect(() => {
		if (!heroes) {
			props.fetchData();
		}
	}, []);

	return loading === false ? getHeroes(heroes) : createLoading();
}

export default HeroesList;
