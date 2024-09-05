import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Tablo } from "./components/Tablo";

function App() {
  const [count, setCount] = useState(0);

  const maxValue = 5;

  const incrementClick = () => {
    let value = count;

    if (value < maxValue) {
      setCount((value = count + 1));
    } else {
      setCount(value);
    }
  };

  const resetClick = () => {
    setCount(0);
  };

  const isDisabledBtnInc = count >= maxValue;
  const isDisabledBtnReset = count === 0;

  return (
    <div className="App">
      <Tablo count={count} maxValue={maxValue} />
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
    </div>
  );
}

export default App;
