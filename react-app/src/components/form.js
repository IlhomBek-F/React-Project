import React, { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  let list = [];

  function handleInput(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    console.log(list);
    setValue("");

    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-div">
        <input
          className="input"
          placeholder="Your Name"
          value={value}
          onChange={handleInput}
        />
        <ul>
          <li>{value}</li>
        </ul>
      </div>
    </form>
  );
}

export default Form;
