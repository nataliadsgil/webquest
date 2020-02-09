export default function result(state = "PLAY", action) {
	switch(action.type) {
		case 'PLAY':
			return "PLAY"
		case 'USER_WIN': 
			return "WIN"
		case 'USER_LOSE':
			return "LOSE"
		case 'COMPLETE':
			return "COMPLETE"
		case 'FAIL':
			return "FAIL"
		default:
			return state
	}
}