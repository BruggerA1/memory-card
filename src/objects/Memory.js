const Memory = (() => {
	const spriteDB = [];

	const addSprite = (sprite) => {
		spriteDB.push(sprite);
	};

	const clear = () => {
		spriteDB = [];
	};

	return Object.assign(spriteDB, {addSprite, clear})
})();

export default Memory;