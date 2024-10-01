import React, { useState } from "react";
import { Button } from "./Button";
import { Screen } from "./Screen";
import styled from "styled-components";

type CounterProps = {
  inputValueMax: number;
  inputValueStart: number;
  count: number;
  isSettingInProgress: boolean;
  error: string;
  incrementClickHandler: () => void;
  resetClickHandler: () => void;
};

export const Counter = ({
  inputValueMax,
  inputValueStart,
  count,
  incrementClickHandler,
  isSettingInProgress,
  error,
  resetClickHandler,
}: CounterProps) => {

  const isDisabledBtnInc = count >= inputValueMax;
  const isDisabledBtnReset = count === inputValueStart;

  return (
    <StyledCounter>
      <Screen error={error} isSettingInProgress={isSettingInProgress} count={count} inputValueMax={inputValueMax} inputValueStart={inputValueStart} />
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
