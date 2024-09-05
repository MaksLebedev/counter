import React from "react";

type TabloPropsType = {
  count: number;
};

export const Tablo = ({ count }: TabloPropsType) => {
  return (
    <div>
      <span>{count}</span>
    </div>
  );
};
