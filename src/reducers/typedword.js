export default function typedword(state = 'aaaa', action) {
	switch(action.type) {
		case 'TYPE_WORD': 
			return action.word
		default:
			return state
	}
}