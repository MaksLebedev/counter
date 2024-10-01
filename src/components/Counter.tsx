import React, { useState } from "react";
import { Button } from "./Button";
import { Screen } from "./Screen";
import styled from "styled-components";

type CounterProps = {
  maxValue: number;
  startValue: number;
  count: number;

  incrementClickHandler: () => void;
  resetClickHandler: () => void;
};

export const Counter = ({
  maxValue,
  startValue,
  count,
  incrementClickHandler,
  resetClickHandler,
}: CounterProps) => {

  const isDisabledBtnInc = count >= maxValue;
  const isDisabledBtnReset = count === startValue;
  return (
    <StyledCounter>
      <Screen count={count} maxValue={maxValue} />
      <div className="Block">
        <Button
          title={"inc"}
          onClick={incrementClickHandler}
          className={"Btn"}
          disabled={isDisabledBtnInc}
        />
        <Button
          title={"reset"}
          onClick={resetClickHandler}
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
