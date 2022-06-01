import React, { useState } from "react";
import Score from "../../objects/Score";
import Card from "../Card/Card";

const GameBoard = ({setCurrent, setHigh, spriteDB, setSpriteDB}) => {
	const refreshList = () => {
		setCards(cardList());
	};

	const cardList = () => {
		return [
			<Card
				refreshList={refreshList}
				addPointToScore={addPointToScore}
				spriteDB={spriteDB}
				setSpriteDB={setSpriteDB}
				resetScore={resetScore}
			/>,
			<Card
				refreshList={refreshList}
				addPointToScore={addPointToScore}
				spriteDB={spriteDB}
				setSpriteDB={setSpriteDB}
				resetScore={resetScore}
			/>,
			<Card
				refreshList={refreshList}
				addPointToScore={addPointToScore}
				spriteDB={spriteDB}
				setSpriteDB={setSpriteDB}
				resetScore={resetScore}
			/>,
		];
	};
	const addPointToScore = () => {
		setCurrent(Score.addPoint());
		setHigh(Score.checkHighScore());
	}
	const resetScore = () => {
		setCurrent(Score.reset());
	};
	const [cards, setCards] = useState(cardList());

	return (
		<div className="GameBoard">
			{cards}
		</div>
	);
};

export default GameBoard;