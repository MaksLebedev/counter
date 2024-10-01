import React, { useState } from "react";
import { Button } from "./Button";
import { Screen } from "./Screen";
import styled from "styled-components";

type CounterProps = {
  maxValue: number;
  minValue: number;
  count: number;

  incrementClick: () => void;
  resetClick: () => void;
};

export const Counter = ({
  maxValue,
  minValue,
  count,
  incrementClick,
  resetClick,
}: CounterProps) => {

  const isDisabledBtnInc = count >= maxValue;
  const isDisabledBtnReset = count === minValue;
  return (
    <StyledCounter>
      <Screen count={count} maxValue={maxValue} />
      <div className="Block">
        <Button
          title={"inc"}
          onClick={incrementClick}
          className={"Btn"}
          disabled={isDisabledBtnInc}
        />
        <Button
          title={"reset"}
          onClick={resetClick}
          className={"Btn"}
          disabled={isDisabledBtnReset}
        />
      </div>
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  border: 2px solid rgb(61, 209, 226);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px;
`;
