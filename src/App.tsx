import { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { CounterSettings } from "./components/CounterSettings";

function App() {
  const maxValue = 5;
  const minValue = 0;
  const [count, setCount] = useState(minValue);

  const [inputValueMax, setInputValueMax] = useState(maxValue);
  const [inputValueMin, setInputValueMin] = useState(minValue);

  console.log('valueMax:', inputValueMax);
  console.log('valueMin:', inputValueMin);
  

  const incrementClick = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const resetClick = () => {
    setCount(0);
  };

  const onChangeInputValueMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValueMax(Number(e.currentTarget.value));
  };
  const onChangeInputValueMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValueMin(Number(e.currentTarget.value));
  };

  return (
    <div className="App">
      <CounterSettings
        inputValueMax={inputValueMax}
        inputValueMin={inputValueMin}
        onChangeInputValueMaxHandler={onChangeInputValueMaxHandler}
        onChangeInputValueMinHandler={onChangeInputValueMinHandler}
      />
      <Counter
        maxValue={maxValue}
        minValue={minValue}
        count={count}
        incrementClick={incrementClick}
        resetClick={resetClick}
      />
    </div>
  );
}

export default App;
