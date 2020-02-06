export default function wordindex(state = 0, action) {
	switch(action.type) {
		case 'NEXT_WORD': 
			return state += 1
		default:
			return state
	}
}