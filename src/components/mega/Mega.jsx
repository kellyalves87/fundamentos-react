import "./Mega.css";
import React, { useState } from "react";

export default (props) => {
  function sortNumbers(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(random) ? sortNumbers(min, max, array) : random;
  }

  function generateNumbers(quant) {
    const numbers = Array(quant)
      .fill(0)
      .reduce((nums) => {
        const newNumber = sortNumbers(1, 60, nums);
        return [...nums, newNumber];
      }, [])
      .sort((num1, num2) => num1 - num2);

    return numbers;
  }

  const [quantity, setQuantity] = useState(props.qtd || 6);
  const initialNumber = generateNumbers(quantity);
  const [number, setNumber] = useState(initialNumber);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{number.join(" ")}</h3>
      <div>
        <label> Quantity of Numbers</label>
        <input
          min="6"
          max="15"
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(+e.target.value);
            setNumber(generateNumbers(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumber(generateNumbers(quantity))}>
        Generate Numbers
      </button>
    </div>
  );
};
