import React, { useState } from "react";
import Select from "react-select";
import missions from "../models/missions";

export default function SelectMissions() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={missions}
        />
      </div>
      <div>
        <h1>Mission: {selectedOption.label}</h1>
      </div>
      <div>
          <p>Book: {selectedOption.book}</p>
        <p>Primary Objective: {selectedOption.primaryObjective}</p>
        <p>
        <a href={selectedOption.url} target="blank">Wahapedia Link</a>
        </p>
        <p>Special Secondary: {selectedOption.specialSecondary}</p>
      </div>
    </div>
  );
}