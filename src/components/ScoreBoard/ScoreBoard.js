import React from "react";

const ScoreBoard = ({current, high}) => {
	return (
		<div className="ScoreBoard">
			<div>Current: {current} </div>
			<div>High: {high}</div>
		</div>
	);
}

export default ScoreBoard;