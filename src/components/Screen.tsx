import React, { useState } from "react";

type TabloPropsType = {
  count: number;
  error: string;
  inputValueMax: number;
  inputValueStart: number;
  isSettingInProgress: boolean;
};

export const Screen = ({
  count,
  inputValueMax,
  inputValueStart,
  isSettingInProgress,
  error,
}: TabloPropsType) => {
  const renderScreenValue = () => {
    if (error) {
      return <span className="Screen-Set">{error}</span>;
    }
    if (isSettingInProgress) {
      return <span className="Screen-Set">enter values and press set</span>;
    }

    return <span>{count}</span>;
  };

  const showRedText = error || count === inputValueMax;

  return (
    <div className={showRedText ? "Screen-Red" : "Screen"}>
      {renderScreenValue()}
    </div>
  );
};

// text, count, error
