export default (state = {}, action) => {
	switch (action.type) {
		case "SET_HEROES":
			return Object.assign({}, state, {
				heroes: action.heroes
			});
		case "HEROES_LOADING":
			return Object.assign({}, state, {
				loading: action.loading
			});
		default:
			return state;
	}
};
