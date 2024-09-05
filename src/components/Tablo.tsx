import React from "react";

type TabloPropsType = {
  count: number;
  maxValue: number;
};

export const Tablo = ({ count, maxValue }: TabloPropsType) => {
  return (
    <div className={count === maxValue ? "Tablo-Red" : "Tablo"}>
      <span>{count}</span>
    </div>
  );
};
