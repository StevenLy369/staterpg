export const storeState = () => {
	let currentState = {};
	return (stateChangeFunction) => {
		const newState = stateChangeFunction(currentState);
		currentState = { ...newState };
		return newState;
	};
};

export const stateChanger = storeState();
export const stateChangerNpc = storeState();

//State that checks if value is a number; if so will return state as an int, vice versa if else
export const changeState = (prop) => {
	return (value) => {
		if (typeof value === 'number') {
			return (state) => ({
				...state,
				[prop]: (state[prop] || 0) + value
			});
		} else {
			return (state) => ({
				...state,
				[prop]: (state[prop] || '') + value
			});
		}
	};
};
