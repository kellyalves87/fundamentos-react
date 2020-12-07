import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const user = props.user || {};
  return (
    <div>
      <If test={user && user.name}>
        Seja bem-vinda <strong>{props.user.name}</strong>!
        <Else>
          Seja bem-vinda <strong>Amiga</strong>!
        </Else>
      </If>
    </div>
  );
};
