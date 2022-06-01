const Memory = (() => {
	let spriteDB = [];

	const addSprite = (sprite) => {
		spriteDB.push(sprite)
	};

	const clear = () => {
		return spriteDB.splice(0, spriteDB.length)
	};

	return Object.assign(spriteDB, {addSprite, clear})
})();

export default Memory;