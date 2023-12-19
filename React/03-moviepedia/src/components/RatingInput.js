import React, { useState } from "react";
import "./RatingInput.css";
import Rating from "./Rating";

function RatingInput({ name, value, onChange }) {
  // value prop은 앞의 ReviewForm 컴포넌트에서 받아온 value.rating
  // 여기서 새로 만들어 준 rating State는 별을 색칠하는 용도의 점수.
  const [rating, setRating] = useState(value);

  // 실제 values.rating 을 바꾸는 함수는 onChange이고,
  // 이 함수를 실행하는 시기는 Star 컴포넌트의 onClick 시점이다.
  const handleSelect = (nextValue) => onChange(name, nextValue);
  const handleMouseOut = () => setRating(value);

  return (
    <div>
      <Rating
        className="RatingInput"
        hoverRating={rating}
        onSelect={handleSelect}
        onHover={setRating}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}

export default RatingInput;
