import React, {useState} from "react";
import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
