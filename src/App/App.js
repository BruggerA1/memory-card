import React, { useState } from "react";
import Memory from "../objects/Memory";
import Score from "../objects/Score";
import Title from "../components/Title/Title";
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
        <Title/>
      </header>
      <main>
      <ScoreBoard
          current={currentScore}
          high={highScore}
        />
        <GameBoard
          setCurrent={setCurrent}
          setHigh={setHigh}
          spriteDb={spriteDB}
          setSpriteDB={setSpriteDB}
        />
      </main>
      <footer>
        <Reset
          setCurrent={setCurrent}
          setHigh={setHigh}
        />
        <Credits/>
      </footer>
    </div>
  );
};

export default App;