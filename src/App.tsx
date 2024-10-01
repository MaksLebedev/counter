import { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { CounterSettings } from "./components/CounterSettings";

export const isCounterSettingError = (maxValue: number, minValue: number) => {
  if (maxValue <= minValue) {
    return "incore must be greater than minValue";
  }
  if (minValue >= maxValue) {
    return "incore must be less than maxValue";
  }
  return "";
};

function App() {
  const maxValue = 5;
  const startValue = 0;

  const [count, setCount] = useState(startValue);

  const [settingsState, setSettingsState] = useState({
    maxValue: maxValue,
    startValue: startValue,
    isSettingInProgress: true,
  });

  const [inputValueMax, setInputValueMax] = useState(maxValue);
  const [inputValueStart, setInputValueStart] = useState(startValue);

  const incrementClickHandler = () => {
    if (count < settingsState.maxValue) {
      setCount(count + 1);
    }
  };

  const resetClickHandler = () => {
    setCount(settingsState.startValue);
  };

  const onChangeInputValueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSettingsState((prev) => ({ ...prev, isSettingInProgress: true }));
  };
  const onChangeinputValueStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSettingsState((prev) => ({ ...prev, isSettingInProgress: true }));
  };

  const setClickHandler = (minValue: number, maxValue: number) => {
    setCount(inputValueStart);

    setSettingsState((prev) => ({
      ...prev,
      isSettingInProgress: false,
      maxValue: maxValue,
      startValue: minValue,
    }));
  };

  const showErrorInCounter = isCounterSettingError(
    settingsState.maxValue,
    settingsState.startValue
  );

  return (
    <div className="App">
      <CounterSettings
        maxValue={maxValue}
        startValue={startValue}
        inputValueMax={inputValueMax}
        inputValueStart={inputValueStart}
        setInputValueMax={setInputValueMax}
        setInputValueStart={setInputValueStart}
        onChangeInputValueMaxHandlerCallback={onChangeInputValueMaxHandler}
        onChangeinputValueStartHandlerCallback={onChangeinputValueStartHandler}
        setClickHandler={setClickHandler}
      />
      <Counter
        isSettingInProgress={settingsState.isSettingInProgress}
        inputValueMax={settingsState.maxValue}
        inputValueStart={settingsState.startValue}
        count={count}
        error={showErrorInCounter}
        incrementClickHandler={incrementClickHandler}
        resetClickHandler={resetClickHandler}
      />
    </div>
  );
}

export default App;
