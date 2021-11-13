import React from "react";
import Select from "react-select";
import factions from "../models/factions";
import secondaryObjectives from "../models/secondaryObjectives";

export default function SelectFactions({faction, onFactionChange, onSecondaryChange, secondary2, onSecondary2Change, secondary3, onSecondary3Change}) {

  // const filterSecondary2 = secondaryObjectives.filter(
  //   (secondary) => secondary.type !== selectedSecondary.type 
  // );


  return (
    <div>
      <div>
        <h5>Select Faction:</h5>
        <Select
          defaultValue='select'
          onChange={onFactionChange}
          options={factions}
        />
      </div>
      <h2>Secondary Objectives:</h2>
      <ul>
        <li>
          Secondary 1:
          <Select
            defaultValue='select'
            onChange={onSecondaryChange}
            options={secondaryObjectives}
          />
        </li>
        <li>
          Secondary 2:
          <Select
            defaultValue='select'
            onChange={onSecondary2Change}
            options={secondaryObjectives}
          />
        </li>
        <li>
          Secondary 3:
          <Select
            defaultValue='select'
            onChange={onSecondary3Change}
            options={secondaryObjectives}
          />{" "}
        </li>
      </ul>
    </div>
  );
}
