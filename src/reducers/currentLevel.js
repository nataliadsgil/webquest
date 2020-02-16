export default function currentLevel(state = {}, action) {
	switch(action.type) {
		case 'SET_LEVEL':
			state = action.level
			return state
		default:
			return state
	}
}