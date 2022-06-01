import React from "react";
import Sprites from '../../objects/Sprites';
import Memory from "../../objects/Memory";

const Card = ({refreshList, addPointToScore, resetScore}) => {
	const handleClick = (e) => {
				
		Memory.forEach(sprite => {
			if (e.target.src == sprite) {
				resetScore();
				Memory.clear();
			}
		})
		Memory.addSprite(e.target.src);
		addPointToScore();		
		refreshList();
	};

	return (
		<div className="Card">
			<img
				src={Sprites.generateRandom()}
				onClick={handleClick}	
			/>
		</div>
	);
};

export default Card;