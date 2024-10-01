import React from "react";

type TabloPropsType = {
  count: number;
  inputValueMax: number;
};

export const Screen = ({ count, inputValueMax }: TabloPropsType) => {
  return (
    <div className={count === inputValueMax ? "Screen-Red" : "Screen"}>
      <span>{count}</span>
    </div>
  );
};
