import SelectFactions from "./components/SelectFactions";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectMissions from "./components/SelectMissions";
import "./App.css";

function App() {

  return (
    <main>
        <div class ="col col1">
          <SelectFactions />
        </div>
        <div class ="col col2">
          <SelectMissions />
        </div>
        <div class ="col col3">
          <SelectFactions />
        </div>

    </main>
  );
}

export default App;
