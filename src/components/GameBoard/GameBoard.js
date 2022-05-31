import React, { useState } from "react";
import Card from "../Card/Card";

const GameBoard = () => {
	const handleList = () => {
		setCardList(newList)
	};

	const newList = () => {
		return [
			<Card refreshCardList={handleList}/>, 
			<Card refreshCardList={handleList}/>, 
			<Card refreshCardList={handleList}/>, 
		];
	};

	const [cardList, setCardList] = useState(newList);

	return (
		<div className="GameBoard">
			{cardList}
		</div>
	);
};

export default GameBoard;