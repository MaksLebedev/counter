import React from "react";

type TabloPropsType = {
  count: number;
};

export const Tablo = ({ count }: TabloPropsType) => {
  return (
    <div className="Tablo">
      <span>{count}</span>
    </div>
  );
};


