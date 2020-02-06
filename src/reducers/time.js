export default function time(state = 0, action) {
	switch(action.type) {
		case 'INCREASE':
			return state += action.time
		case 'RETURN_ZERO':
			return 0
		default:
			return state
	}
}