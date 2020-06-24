export const storeState = () => {
	let currentState = {};
	return (stateChangeFunction) => {
		const newState = stateChangeFunction(currentState);
		currentState = { ...newState };
		return newState;
	};
};

export const stateChanger = storeState();

//state for numerical value
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

//state for character creation

export const changeStateString = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: state[prop] || value
		});
	};
};

export const changeStateNpc = (prop, prop2) => {
	return (value, value2) => {
		return (state) => ({
			...state,
			[prop]: state[prop] || value,
			[prop2]: (state[prop2] || 0) + value2
		});
	};
};
