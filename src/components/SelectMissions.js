import React, { useEffect, useState } from "react";
import Select from "react-select";
import missions from "../models/missions";
import battleSize from "../models/battleSize";

export default function SelectMissions() {
  const [selectedMission, setSelectedMission] = useState([]);
  const [selectedBattleSize, setSelectedBattleSize] = useState([]);

  const filteredMissions = missions.filter(
    (mission) => mission.type === selectedBattleSize.label
  );


  function loadArmies () {
  alert((document.getElementsByClassName("test")[0].innerText) + "\n" + "VS" + "\n" + (document.getElementsByClassName("test")[1].innerText)) 
  }

  return (
    <div>
      <div>
        <h5>Select Battle Size: </h5>
        <Select
          defaultValue={selectedBattleSize}
          onChange={setSelectedBattleSize}
          options={battleSize}
        />
        <h5>Select Mission: </h5>
        <Select
          defaultValue={selectedMission}
          onChange={setSelectedMission}
          options={filteredMissions}
        />
      </div>
      <div>
        <h1>Mission: {selectedMission.label}</h1>
      </div>
      <div>
        <p>Book: {selectedMission.book}</p>
        <p>Battle Size: {selectedBattleSize.label}</p>
        <p>Primary Objective: {selectedMission.primaryObjective}</p>
        <p>
          <a href={selectedMission.url} target="blank">
            Link to Mission
          </a>
        </p>
        <p>Special Secondary: {selectedMission.specialSecondary}</p>
        <button onClick={loadArmies}>Load Armies</button>
      </div>
    </div>
  );
}
