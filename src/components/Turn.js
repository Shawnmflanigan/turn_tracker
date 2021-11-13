import React, { useState } from "react";

export default function Turn() {
  const [turn, setTurn] = useState(0);
  const upOne = () => {
    setTurn((turn) => turn + 1);
  };
  const downOne = () => {
    setTurn((turn) => turn - 1);
  };
  console.log(turn)
  return (
    <div>
      <button onClick={upOne}>Up One Turn</button>
      <button onClick={downOne}>Down One Turn</button>
      <h1>Turn: {turn}</h1>
    </div>
  );
}
