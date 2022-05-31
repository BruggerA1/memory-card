import React, {useState} from "react";
import Score from "../../objects/Score";

const ScoreBoard = () => {
	const [current, setCurrent] = useState(Score.current);
	const [high, setHigh] = useState(Score.high);
	const handleClick = () => {
		setCurrent(Score.addPoint());
		setHigh(Score.checkHighScore());
	};
	return (
		<div className="ScoreBoard">
			<div>Current: {current}</div>
			<div>High: {high}</div>
			{/* <button onClick={handleClick}>Click</button> */}
		</div>
	);
}

export default ScoreBoard;