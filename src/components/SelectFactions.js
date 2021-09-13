import React, { useState } from "react";
import Select from "react-select";
import factions from "../models/factions";

export default function SelectFactions() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div>
        <h5>Select Faction:</h5>
        <Select
          defaultValue="select"
          onChange={setSelectedOption}
          options={factions}
        />
      </div>
      <div>
        <h1>{selectedOption.label}</h1>
      </div>
      <div>
        <img class="icon" src={selectedOption.icon} alt="" />
      </div>
      <h2>Turn: </h2>
      <h2>CP: </h2>
      <h2>Primary Objective Points: </h2>
      <h2>Secondary Objectives:</h2>
      <ul>
        <li>Secondary 1: </li>
        <li>Secondary 2: </li>
        <li>Secondary 3: </li>
      </ul>
    </div>
  );
}
