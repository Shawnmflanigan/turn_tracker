import React, { useState } from "react";
import Select from "react-select";
import factions from "../models/factions";
import secondaryObjectives from "../models/secondaryObjectives";

export default function SelectFactions() {
  const [selectedFaction, setSelectedFaction] = useState([]);

  const [selectedSecondary, setSelectedSecondary] = useState([]);

  const [selectedSecondary2, setSelectedSecondary2] = useState([]);

  const [selectedSecondary3, setSelectedSecondary3] = useState([]);

  const filterSecondary2 = secondaryObjectives.filter(
    (secondary) => secondary.type !== selectedSecondary.type 
  );

  return (
    <div>
      <div>
        <h5>Select Faction:</h5>
        <Select
          defaultValue="select"
          onChange={setSelectedFaction}
          options={factions}
        />
      </div>
      <div>
        <h1>{selectedFaction.label}</h1>
      </div>
      <div>
        <img class="icon" src={selectedFaction.icon} alt="" />
      </div>
      <h2>Turn: </h2>
      <h2>CP: </h2>
      <h2>Primary Objective Points: </h2>
      <h2>Secondary Objectives:</h2>
      <ul>
        <li>
          Secondary 1:
          <Select
            defaultValue={selectedSecondary}
            onChange={setSelectedSecondary}
            options={secondaryObjectives}
          />
        </li>
        <li>
          Secondary 2:
          <Select
            defaultValue={selectedSecondary2}
            onChange={setSelectedSecondary2}
            options={filterSecondary2}
          />
        </li>
        <li>
          Secondary 3:
          <Select
            defaultValue={selectedSecondary3}
            onChange={setSelectedSecondary3}
            options={filterSecondary2}
          />{" "}
        </li>
      </ul>
    </div>
  );
}
