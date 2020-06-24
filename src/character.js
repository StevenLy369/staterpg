export const storeState = () => {
	let currentState = { name: '', health: 50, strength: 0, dexterity: 0, intelligience: 0 };
	return (stateChangeFunction) => {
		const newState = stateChangeFunction(currentState);
		currentState = { ...newState };
		return newState;
	};
};

export const stateChanger = storeState();

export const stateChangerNpc = storeState({
	name: 'Big Rob The Bad One',
	health: 150,
	strength: 30,
	intelligience: -100
});

//state for numerical value
export const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value
		});
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
