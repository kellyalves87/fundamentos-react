import React from "react";

export default (props) => {
  const cb = props.onClick;
  return (
    <div>
      <div>Son</div>
      <button onClick={(e) => cb("Guilherme", 34, true)}>
        Send Informations
      </button>
    </div>
  );
};
