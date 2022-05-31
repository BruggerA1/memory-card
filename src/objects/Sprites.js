import importSprites from "../utilities/importSprites";

const Sprites = (() => {
	const Sprites = importSprites();

	const generateRandom = () => {
		const random = Math.floor(151*Math.random());
		return Sprites[random];
	};

	return Object.assign(Sprites, {generateRandom});
})();

export default Sprites;