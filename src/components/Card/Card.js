import React from "react";
import Sprites from '../../objects/Sprites';
import Memory from "../../objects/Memory";
import Score from "../../objects/Score";

const Card = ({refreshCardList}) => {
	const handleClick = (e) => {
		//check for dupes
		Memory.forEach(sprite => {
			if (e.target.src === sprite) {
				console.log('DUPLICATE FOUND');
			} 
		});
		// add sprite to db
		Memory.addSprite(e.target.src);
		// add point
		
		// refresh
		refreshCardList();

	};
	return (
		<div className="Card">
			<img src={Sprites.generateRandom()} onClick={handleClick}/>
		</div>
	);
};

export default Card;