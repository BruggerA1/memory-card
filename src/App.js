import React from "react";
import sprites from "./utilities/importSprites";

const App = () => {
  return (
    <div className="App">
      {sprites.map(sprite => <img src={sprite}/>)}
    </div>
  );
};

export default App;