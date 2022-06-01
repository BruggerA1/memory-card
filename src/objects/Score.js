const Score = (() => {
	let current = 0;
	let high = 0;

	const addPoint = () => {
		current++;
		return current;
	};

	const checkHighScore = () => {
		if (current > high) high = current;
		return high;
	};

	const reset = () => {
		return current = 0;
	};
	return {current, high, addPoint, checkHighScore, reset};
})();

export default Score;