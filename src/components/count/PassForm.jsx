import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="passInput">Passo: </label>
      <input
        id="passInput"
        type="number"
        value={props.pass}
        onChange={(e) => props.setPass(+e.target.value)}
      />
    </div>
  );
};
