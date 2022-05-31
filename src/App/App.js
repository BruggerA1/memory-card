import React from "react";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import GameBoard from "../components/GameBoard/GameBoard";
import Reset from "../components/Reset/Reset";
import Credits from "../components/Credits/Credits";
import './App.scss';

import Memory from "../objects/Memory";

const App = () => {
  return (
    <div className="App">
      <header>
        <ScoreBoard/>
      </header>
      <main>
        <GameBoard/>
        <Reset/>
      </main>
      <footer>
        <Credits/>
      </footer>
    </div>
  );
};

export default App;