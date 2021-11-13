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

  const decrementButton = () =>
    setSecondary1Points((secondary1Points) => secondary1Points - 1);

  const [secondary2Points, setSecondary2Points] = useState(0);
  const incrementButton2 = () =>
    setSecondary2Points((secondary2Points) => secondary2Points + 1);

  const decrementButton2 = () =>
    setSecondary2Points((secondary2Points) => secondary2Points - 1);

    const [secondary3Points, setSecondary3Points] = useState(0);
    const incrementButton3 = () =>
      setSecondary3Points((secondary3Points) => secondary3Points + 1);
  
    const decrementButton3 = () =>
      setSecondary3Points((secondary3Points) => secondary3Points - 1);

  const addPoints = primary1 + secondary1Points + secondary2Points + secondary3Points;
  console.log(addPoints);

  return (
    <div>
      <div class="col col1">
        {`Player 1: ${faction.label}`}
        <br />
        <img src={faction.icon} alt="" />
        <p>Primary: {primary1}</p>
        <button onClick={upFive}>+</button>
        <button onClick={downFive}>-</button>

        <p>Secondary:</p>
        <ul>
          <li>
            {p1Secondary1.label}: {secondary1Points}
            <button onClick={incrementButton}>+</button>
            <button onClick={decrementButton}>-</button>
          </li>
          <li>
            {p1Secondary2.label}: {secondary2Points}
            <button onClick={incrementButton2}>+</button>
            <button onClick={decrementButton2}>-</button>
          </li>
          <li>
            {p1Secondary3.label}: {secondary3Points}
            <button onClick={incrementButton3}>+</button>
            <button onClick={decrementButton3}>-</button>
          </li>
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
