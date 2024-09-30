import React from "react";

type TabloPropsType = {
  count: number;
  maxValue: number;
};

export const Screen = ({ count, maxValue }: TabloPropsType) => {
  return (
    <div className={count === maxValue ? "Screen-Red" : "Screen"}>
      <span>{count}</span>
    </div>
  );
};
