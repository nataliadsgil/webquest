export default function level(state=[], action) {
	const levels = [
		{name: "Lvl 01", qtdWords: 10, totalComplete: 0},
		{name: "Lvl 02", qtdWords: 20, totalComplete: 0},
		{name: "Lvl 03", qtdWords: 30, totalComplete: 0},
		{name: "Lvl 04", qtdWords: 40, totalComplete: 0},
		{name: "Lvl 05", qtdWords: 50, totalComplete: 0},
		{name: "Lvl 06", qtdWords: 60, totalComplete: 0}
	]

	state = levels

	switch(action.type) {
		default:
			return state
	}
}