export default function life(state = 3, action) {
	switch(action.type) {
		case 'REMOVE_LIFE':
			return state -= 1
		default:
			return state
	}
}