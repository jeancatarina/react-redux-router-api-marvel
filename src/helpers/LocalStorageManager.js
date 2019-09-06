const getAllCustomHeroesNames = heroes =>
	heroes.map(hero => {
		return {
			id: hero.id,
			name: localStorage.getItem(hero.id)
		};
	});

const getHeroesObjWithCustomNames = heroes => {
	const customHeroesNames = getAllCustomHeroesNames(heroes).filter(
		hero => hero.name !== null
	);

	return heroes.map(hero => {
		const newHero = customHeroesNames.filter(
			customHero => customHero.id === hero.id
		);

		return newHero.length
			? Object.assign({}, hero, { name: newHero[0].name })
			: hero;
	});
};

export default getHeroesObjWithCustomNames;
