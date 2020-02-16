export function getQuestion(index, array) {
	console.log(array)
	return {
		type: 'GET_QUESTION',
		index: index,
		array: array
	}
}