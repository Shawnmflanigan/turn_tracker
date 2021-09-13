import React, { useState } from "react";
import Select from "react-select";
import missions from "../models/missions";
import battleSize from "../models/battleSize";

export default function SelectMissions() {
  const [selectedMission, setSelectedMission] = useState("");
  const [selectedBattleSize, setSelectedBattleSize] = useState("");
    console.log(selectedMission.type)
  return (
    <div>
      <div>
          <Select 
          defaultValue={selectedBattleSize}
          onChange={setSelectedBattleSize}
          options={battleSize}/>
        <Select
          defaultValue={selectedMission}
          onChange={setSelectedMission}
          options={missions}
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
        <a href={selectedMission.url} target="blank">Wahapedia Link</a>
        </p>
        <p>Special Secondary: {selectedMission.specialSecondary}</p>
      </div>
    </div>
  );
}