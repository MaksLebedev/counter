import { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { CounterSettings } from "./components/CounterSettings";

function App() {
  const maxValue = 5;
  const startValue = 0;
  const [count, setCount] = useState(startValue);

  const [inputValueMax, setInputValueMax] = useState(maxValue);
  const [inputValueStart, setinputValueStart] = useState(startValue);

  console.log('valueMax:', inputValueMax);
  console.log('valueMin:', inputValueStart);
  

  const incrementClickHandler = () => {
    if (count < inputValueMax) {
      setCount(count + 1);
    }
  };

  const resetClickHandler = () => {
    setCount(0);
  };

  const onChangeInputValueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValueMax(Number(e.currentTarget.value));
  };
  const onChangeinputValueStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setinputValueStart(Number(e.currentTarget.value));
  };

  const setClickHandler = () => {
    setCount(inputValueStart);
  }

  return (
    <div className="App">
      <CounterSettings
        maxValue={maxValue}
        startValue={startValue}
        inputValueMax={inputValueMax}
        inputValueStart={inputValueStart}
        onChangeInputValueMaxHandler={onChangeInputValueMaxHandler}
        onChangeinputValueStartHandler={onChangeinputValueStartHandler}
        setClickHandler={setClickHandler}
      />
      <Counter
        inputValueMax={inputValueMax}
        inputValueStart={inputValueStart}
        count={count}
        incrementClickHandler={incrementClickHandler}
        resetClickHandler={resetClickHandler}
      />
    </div>
  );
}

export default App;
