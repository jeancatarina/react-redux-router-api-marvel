import HeroListConstants from "../helpers/HeroListConstants";

const getUrl = searchedName => {
	const apiKey = "871068914492dad0b40381ddddf87016",
		endpoint = "characters",
		baseUrl = `https://gateway.marvel.com:443/v1/public/${endpoint}`,
		nameStartsWith = searchedName ? `&nameStartsWith=${searchedName}` : "",
		url = `${baseUrl}?apikey=${apiKey}${nameStartsWith}`;

	return url;
};

export const heroesLoading = loading => {
	return {
		type: HeroListConstants.HEROES_LOADING,
		loading: loading
	};
};

export const setHeroes = heroes => {
	return {
		type: HeroListConstants.SET_HEROES,
		heroes: heroes
	};
};

export const fetchData = searchedName => {
	return dispatch => {
		dispatch(heroesLoading(true));

		fetch(getUrl(searchedName), {
			accept: "application/json"
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				return response.json();
			})
			.then(({ data: { results: heroes } }) => {
				dispatch(setHeroes(heroes));
				dispatch(heroesLoading(false));

				return Promise.resolve();
			});
	};
};
