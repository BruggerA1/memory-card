import React from "react";

const App = () => {
  return (
    <div className="App">
      {sprites.map(sprite => <img src={sprite}/>)}
    </div>
  );
};

export default App;