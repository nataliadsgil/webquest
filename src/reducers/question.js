export default function question(state = {}, action) {
	
	const questions = [
		    {word: "red", translate: "vermelho"},
		    {word: "green", translate: "verde"},
		    {word: "blue", translate: "azul"},
		    {word: "yellow", translate: "amarelo"},
		    {word: "purple", translate: "roxo"},
		    {word: "gray", translate: "cinza"},
		    {word: "orange", translate: "laranja"},
		    {word: "pink", translate: "rosa"},
		    {word: "brown", translate: "marrom"},
		    {word: "black", translate: "preto"},
		    {word: "white", translate: "branco"},
		    {word: "cian", translate: "ciano"}
		]

	switch(action.type) {
		case 'GET_QUESTION':
			if(action.index < action.array.length) {
				return action.array[action.index]	
			}
			else {
				return state
			}
		default:
			return state
	}
}