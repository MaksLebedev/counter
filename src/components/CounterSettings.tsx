import React from "react";
import { ChangeEvent, useState } from "react";

import styled from "styled-components";
import { Button } from "./Button";
import { isCounterSettingError } from "../App";

type CounterSettingsProps = {
  maxValue: number;
  startValue: number;

  inputValueMax: number;
  inputValueStart: number;
  setInputValueMax: (value: number) => void;
  setInputValueStart: (value: number) => void;

  onChangeInputValueMaxHandlerCallback: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  onChangeinputValueStartHandlerCallback: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  setClickHandler: (minValue: number, maxValue: number) => void;
};

export const CounterSettings = ({
  maxValue,
  startValue,

  inputValueMax,
  inputValueStart,
  setInputValueMax,
  setInputValueStart,

  onChangeInputValueMaxHandlerCallback,
  onChangeinputValueStartHandlerCallback,
  setClickHandler,
}: CounterSettingsProps) => {
  const isError = isCounterSettingError(inputValueMax, inputValueStart);

  const isDisabledBtnSet =
    (inputValueStart === startValue && inputValueMax === maxValue) ||
    inputValueStart === inputValueMax ||
    !!isError;

  const onChangeInputValueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInputValueMaxHandlerCallback(e);
    setInputValueMax(Number(e.currentTarget.value));
  };
  const onChangeinputValueStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeinputValueStartHandlerCallback(e);
    setInputValueStart(Number(e.currentTarget.value));
  };

  return (
    <StyledCounterSettings>
      <StyledSettings>
        <StyledWrapper>
          <span>max value:</span>
          <input
            style={{
              width: 80,
              borderRadius: "4px",
              border: "2px solid rgb(61, 209, 226)",
              textAlign: "center",
            }}
            type="number"
            value={inputValueMax}
            onChange={onChangeInputValueMaxHandler}
          />
        </StyledWrapper>
        <StyledWrapper>
          <span>start value:</span>
          <input
            style={{
              width: 80,
              borderRadius: "4px",
              border: "2px solid rgb(61, 209, 226)",
              textAlign: "center",
            }}
            type="number"
            value={inputValueStart}
            onChange={onChangeinputValueStartHandler}
          />
        </StyledWrapper>
      </StyledSettings>
      <div className="Block">
        <Button
          title="set"
          className="Btn"
          onClick={() => setClickHandler(inputValueStart, inputValueMax)}
          disabled={isDisabledBtnSet}
        />
      </div>
      {isError}
    </StyledCounterSettings>
  );
};

const StyledCounterSettings = styled.div`
  border: 2px solid rgb(61, 209, 226);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px;
`;

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border: 2px solid rgb(61, 209, 226);
  border-radius: 5px;

  width: 200px;
  height: 80px;
  margin-bottom: 20px;
  color: rgb(61, 209, 226);
  font-weight: bold;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;
