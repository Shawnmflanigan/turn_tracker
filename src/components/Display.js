export default function Display({ faction,faction2 }) {
  console.log(faction);
  console.log(faction2)

  return (
    <div>
      <div>
        {`Player 1: ${faction.label}`}
        <br />
        <img class="icon" src={faction.icon} alt="" />
      </div>
      <div>
        {`Player 2: ${faction2.label}`}
        <br />
        <img class="icon" src={faction2.icon} alt="" />
      </div>
    </div>
  );
}
