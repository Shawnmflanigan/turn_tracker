import { useState } from "react";
import Turn from "./Turn";

export default function Display({
  faction,
  faction2,
  p1Secondary1,
  p1Secondary2,
  p1Secondary3,
}) {
  console.log(`Faction 1 is ${faction.label}`);
  console.log(`Faction 2 is ${faction2.label}`);
  console.log(
    `Player one Secondaries are ${p1Secondary1.label}, ${p1Secondary2.label}, & ${p1Secondary3.label}`
  );

  // Primary Objective Tracker
  const [primary1, setPrimary1] = useState(0);

  const upFive = () => {
    setPrimary1((primary1) => primary1 + 5);
  };
  const downFive = () => {
    setPrimary1((primary1) => primary1 - 5);
  };

  const [primary2, setPrimary2] = useState(0);

  const upFive2 = () => {
    setPrimary2((primary2) => primary2 + 5);
  };
  const downFive2 = () => {
    setPrimary2((primary2) => primary2 - 5);
  };

  // End Primary Objective Tracker

  // Secondary Objective Points
  const [secondary1Points, setSecondary1Points] = useState(0);
  const incrementButton = () =>
    setSecondary1Points((secondary1Points) => secondary1Points + 1);

  const decrementButonn = () =>
    setSecondary1Points((secondary1Points) => secondary1Points - 1);

  
  const addPoints = primary1 + secondary1Points;
  console.log(addPoints)

  return (
    <div>
      <div class="col col1">
        {`Player 1: ${faction.label}`}
        <br />
        <img src={faction.icon} alt="" />
        <p>Primary: {primary1}</p>
        <button onClick={upFive}>+</button>
        <button onClick={downFive}>-</button>

        <p>Secondary: {secondary1Points}</p>
        <ul>
          <li>
            {p1Secondary1.label}
            <button onClick={incrementButton}>+</button>
            <button onClick={decrementButonn}>-</button>
          </li>
          <li>{p1Secondary2.label}</li>
          <li>{p1Secondary3.label}</li>
        </ul>
      </div>

      <div class="col col2">
        This is the turn placeholder
        <Turn />
        {faction.label}: {addPoints} vs {faction2.label}: {primary2}
      </div>

      <div class="col col3">
        {`Player 2: ${faction2.label}`}
        <br />
        <img class="icon" src={faction2.icon} alt="" />
        <p>Primary: {primary2}</p>
        <button onClick={upFive2}>+</button>
        <button onClick={downFive2}>-</button>
      </div>
      {/* Place holder for scroll */}
      <div id="display"></div>
    </div>
  );
}
