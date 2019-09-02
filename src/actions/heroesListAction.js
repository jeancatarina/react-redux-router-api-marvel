const getUrl = () => {
	const apiKey = "871068914492dad0b40381ddddf87016",
		endpoint = "characters",
		baseUrl = `https://gateway.marvel.com:443/v1/public/${endpoint}`,
		url = `${baseUrl}?apikey=${apiKey}`;

	return url;
};

export const heroesLoading = loading => dispatch => {
	dispatch({
		type: "HEROES_LOADING",
		loading: loading
	});
};

export const setHeroes = heroes => dispatch => {
	dispatch({
		type: "SET_HEROES",
		heroes: heroes
	});
};

export const fetchData = () => {
	return dispatch => {
		dispatch(heroesLoading(true));

		fetch(getUrl(), {
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
			});
	};
};
