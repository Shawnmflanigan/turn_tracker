import SelectFactions from "./components/SelectFactions";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectMissions from "./components/SelectMissions";
import "./App.css";
import { useState } from "react";
import Display from "./components/Display"

function App() {

  const [faction, setFaction] = useState([]);
  const [faction2, setFaction2] = useState([]);

  return (
    <main>
        <div class ="col col1">
          <SelectFactions faction={faction} onFactionChange={setFaction} />
        </div>
        <div class ="col col2">
          <SelectMissions />
          <Display faction={faction} faction2={faction2}/>
        </div>
        <div class ="col col3">
        <SelectFactions faction={faction2} onFactionChange={setFaction2} />
        </div>

    </main>
  );
}

export default App;
