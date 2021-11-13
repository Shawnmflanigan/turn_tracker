import SelectFactions from "./components/SelectFactions";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectMissions from "./components/SelectMissions";
import "./App.css";
import { useState } from "react";
import Display from "./components/Display";

function App() {
  const [faction, setFaction] = useState([]);
  const [faction2, setFaction2] = useState([]);

  const [p1Secondary1, setP1Secondary1] = useState([]);
  const [p1Secondary2, setP1Secondary2] = useState([]);
  const [p1Secondary3, setP1Secondary3] = useState([]);

  const [p2Secondary1, setP2Secondary1] = useState([]);
  const [p2Secondary2, setP2Secondary2] = useState([]);
  const [p2Secondary3, setP2Secondary3] = useState([]);

  function loadArmies() {
    var elem = document.getElementById("display");
    elem.scrollIntoView();
    console.log("clicky");
    console.log(elem);
  }

  return (
    <main>
      <div class="col col1">
        <h1>Player 1:</h1>
        <SelectFactions
          faction={faction}
          onFactionChange={setFaction}
          secondary={p1Secondary1}
          secondary2={p1Secondary2}
          secondary3={p1Secondary3}
          onSecondaryChange={setP1Secondary1}
          onSecondary2Change={setP1Secondary2}
          onSecondary3Change={setP1Secondary3}
        />
        <hr></hr>
      </div>
      <div class="col col2">
        <h1>Player 2:</h1>
        <SelectFactions
          faction={faction2}
          onFactionChange={setFaction2}
          secondary={p2Secondary1}
          secondary2={p2Secondary2}
          secondary3={p2Secondary3}
          onSecondaryChange={setP2Secondary1}
          onSecondary2Change={setP2Secondary2}
          onSecondary3Change={setP2Secondary3}
        />
        <hr></hr>
      </div>
      <div class="col col3">
        <h1>This is Mission Shit</h1>
        <SelectMissions />
        <button onClick={loadArmies}>Load Armies</button>
        <hr></hr>
      </div>
      <Display
        faction={faction}
        faction2={faction2}
        p1Secondary1={p1Secondary1}
        p1Secondary2={p1Secondary2}
        p1Secondary3={p1Secondary3}
        p2Secondary1={p2Secondary1}
        p2Secondary2={p2Secondary2}
        p2Secondary3={p2Secondary3}

      />
    </main>
  );
}

export default App;
