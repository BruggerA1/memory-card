import React, { useState } from "react";
import Memory from "../objects/Memory";
import Score from "../objects/Score";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import GameBoard from "../components/GameBoard/GameBoard";
import Reset from "../components/Reset/Reset";
import Credits from "../components/Credits/Credits";
import './App.scss';

const App = () => {
  const [currentScore, setCurrent] = useState(Score.current);
  const [highScore, setHigh] = useState(Score.high);
  const [spriteDB, setSpriteDB] = useState(Memory.spriteDB);
  return (
    <div className="App">
      <header>
        <ScoreBoard
          current={currentScore}
          high={highScore}
        />
      </header>
      <main>
        <GameBoard
          setCurrent={setCurrent}
          setHigh={setHigh}
          spriteDb={spriteDB}
          setSpriteDB={setSpriteDB}
        />
        <Reset/>
      </main>
      <footer>
        <Credits/>
      </footer>
    </div>
  );
};

export default App;