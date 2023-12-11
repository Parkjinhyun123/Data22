import Rock from "./assets/rock.svg";
import Scissor from "./assets/scissor.svg";
import Paper from "./assets/paper.svg";

const IMAGES = {
  rock: Rock,
  scissor: Scissor,
  paper: Paper,
};

function HandIcon({ value, className }) {
  const src = IMAGES[value];
  return <img src={src} alt={value} className={className} />;
}

export default HandIcon;
