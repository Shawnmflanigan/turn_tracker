import React, { useState } from "react";
import Select from "react-select";
import factions from "../models/factions";

export default function SelectFactions() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div>
        <Select
          defaultValue={selectedOption}
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
    </div>
  );
}
