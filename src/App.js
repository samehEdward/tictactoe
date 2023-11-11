import './App.css';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

/* const Books = [
  {title: "Saly",
  subject: "Chemi",
  age: 40,
  },
  {title: "Daniel",
  subject: "Deutch",
  age: 17,
  },
  {title: "David",
  subject: "Math",
  age: 13,
  },
  {title: "Sarah",
  subject: "Herz",
  age: 3,
  },

] */

function App() {
  return (
    <>
    <div className="App">
      <Player name={"Sam"} symbol={"X"}/>
      <Player name={"Bat"} symbol={"O"}/>
    </div>
    <div>
      <GameBoard />
    </div>
    </>
  );
}

export default App;
