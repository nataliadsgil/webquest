export function increaseTime(time) {
	return {
		type: 'INCREASE',
		time: time
	}
}

export function returnZero() {
	return {
		type: 'RETURN_ZERO'
	}
}