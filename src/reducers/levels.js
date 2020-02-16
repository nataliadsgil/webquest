export default function level(state=[], action) {
	switch(action.type) {
		case 'SET_LEVELS':
			state = action.array
			return state
		default:
			return state
	}
}