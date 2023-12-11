import HandIcon from "./Handicon";

function HandButton({ value, onClick }) {
  return (
    <button onClick={onClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
