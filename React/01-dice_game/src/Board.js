import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function Board({ name, color }) {
  // const DICE_IMAGES = {
  //   red: diceRed01,
  //   blue: diceBlue01,
  // };
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={random(6)} />
      <h2>총점</h2>
      <p>0</p>
      <h2>기록</h2>
      <p>0</p>
    </div>
  );
}

export default Board;
