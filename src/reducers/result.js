export default function result(state = false, action) {
	switch(action.type) {
		case 'USER_WIN': 
			return true
		default:
			return state
	}
}