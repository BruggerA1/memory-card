import React from "react";
import Memory from "../../objects/Memory";
import Score from "../../objects/Score";

const Reset = ({setCurrent, setHigh}) => {
	const handleClick = () => {
		setCurrent(Score.reset());
		setHigh(Score.resetHigh());
		Memory.clear();
	}
	return (
		<div className="Reset">
			<button onClick={handleClick}>reset</button>
		</div>
	);
};

export default Reset;