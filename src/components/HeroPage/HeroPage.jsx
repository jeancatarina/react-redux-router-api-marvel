import React, { useRef, useState } from "react";
import {
	Button,
	Card,
	CardColumns,
	FormControl,
	InputGroup,
	Toast
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import getHeroesObjWithCustomNames from "../../helpers/LocalStorageManager";

const size = {
	MEDIUM: "300px",
	BIG: "600px"
};

const key = {
	ENTER: 13,
	MOUSE: undefined
};

const toasterStyle = { marginBottom: 0 };

const getCurrentHero = (heroes, heroId) =>
	heroes && heroes.find(hero => hero.id.toString() === heroId);

const HeroPage = props => {
	const { heroes } = props,
		heroId = props.match.params.id,
		hero = getCurrentHero(heroes, heroId),
		cardTitleInputRef = useRef(null),
		customHeroName = localStorage.getItem(heroId),
		[show, setShowAlert] = useState(false);

	const createCardAvatar = thumbnail => (
		<Card.Img
			variant="top"
			src={`${thumbnail.path}.${thumbnail.extension}`}
		/>
	);

	const changeHeroName = event => {
		if (event.charCode === key.ENTER || event.charCode === key.MOUSE) {
			localStorage.setItem(heroId, cardTitleInputRef.current.value);
			props.setHeroes(getHeroesObjWithCustomNames(heroes));
			setShowAlert(true);
		}
	};

	const createCardTitleInput = name => (
		<Card.Title>
			<InputGroup className="mb-3">
				<FormControl
					ref={cardTitleInputRef}
					onKeyPress={changeHeroName}
					placeholder="De um nome a esse herói"
					defaultValue={customHeroName || name}
				/>
				<InputGroup.Append>
					<Button onClick={changeHeroName}>Alterar</Button>
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

	const createToaster = () => (
		<Toast
			onClose={() => setShowAlert(false)}
			show={show}
			delay={3000}
			autohide
		>
			<div
				className="alert alert-success"
				style={toasterStyle}
				role="alert"
			>
				Salvo com sucesso!
			</div>
		</Toast>
	);

	const render = () => {
		return (
			<>
				{createToaster()}
				{hero ? createCard(hero) : emptyState()}
			</>
		);
	};

	return render();
};

export default React.memo(HeroPage);
