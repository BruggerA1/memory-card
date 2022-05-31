const importSprites = () => {
	// require all .png files in the '/sprites' directory
	const context = require.context('../assets/sprites', false, /\.png$/);

	// get array of file names matching context search.
	const spritePathArr = context.keys();

	// natrual sort the file names  
	const spriteArr = naturalSort(spritePathArr).map(context);

	return spriteArr;
};

const naturalSort = (Array) => {
	// sort alphabetically & atomically. 
	// (a01, a02, b01, ..., b10, z01, z02)
	return Array.sort((a, b) => 
		a.localeCompare(b, navigator.language, {numeric: true})
	);
};

export default importSprites;