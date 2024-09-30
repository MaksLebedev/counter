import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const CounterSettings = () => {
  return (
    <StyledCounterSettings>
      <StyledSettings>
        <StyledWrapper>
          <span>max value:</span>
          <input style={{ width: 80 }} type="number" />
        </StyledWrapper>
        <StyledWrapper>
          <span>start value:</span>
          <input style={{ width: 80 }} type="number" />
        </StyledWrapper>
      </StyledSettings>

      <div className="Block">
        <Button title="set" className="Btn" onClick={() => {}} />
      </div>
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
  /* align-items: center; */
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
