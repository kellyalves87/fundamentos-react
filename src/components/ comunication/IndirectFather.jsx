import React, { useState } from "react";
import IndirectSon from "./IndirectSon";

//comunicação indireta é feita via estado

export default (props) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  function sendInformations(name, age, nerd) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }
  return (
    <div>
      <span>{name} </span>
      <span>{age} </span>
      <span>{nerd ? 'true' : 'false'} </span>
      <IndirectSon onClick={sendInformations}></IndirectSon>
    </div>
  );
};
