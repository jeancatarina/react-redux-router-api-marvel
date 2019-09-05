import HeroListConstants from "../helpers/HeroListConstants";

export default (state = {}, action) => {
	switch (action.type) {
		case HeroListConstants.SET_HEROES:
			return Object.assign({}, state, {
				heroes: action.heroes
			});
		case HeroListConstants.HEROES_LOADING:
			return Object.assign({}, state, {
				loading: action.loading
			});
		default:
			return state;
	}
};
