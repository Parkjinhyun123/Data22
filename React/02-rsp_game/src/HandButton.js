import HandIcon from "./Handicon";
import "./HandButton.css";

function HandButton({ value, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button onClick={handleClick} className="HandButton">
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;
