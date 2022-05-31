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

	return {current, high, addPoint, checkHighScore};
})();

export default Score;