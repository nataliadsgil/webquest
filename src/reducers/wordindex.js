export default function wordindex(state = 0, action) {
	switch(action.type) {
		case 'INCREMENT_INDEX': 
			return state + 1
		default:
			return state
	}
}