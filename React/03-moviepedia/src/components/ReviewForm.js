import React, { useRef, useState } from "react";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(name.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input type="file" accept="image/png, image/jpg" />
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={values.title}
      />
      <input
        type="text"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea value={values.content} name="content" onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
