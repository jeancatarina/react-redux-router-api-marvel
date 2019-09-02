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
	const apiKey = "871068914492dad0b40381ddddf87016";
	const endpoint = "characters";
	const baseUrl = `https://gateway.marvel.com:443/v1/public/${endpoint}`;
	const url = `${baseUrl}?apikey=${apiKey}`;

	return dispatch => {
		dispatch(heroesLoading(true));

		fetch(url, {
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
