export default (state = {}, action) => {
	switch (action.type) {
		case "SET_HEROES":
			return {
				result: action.heroes
			};
		default:
			return state;
	}
};
