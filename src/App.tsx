import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Tablo } from "./components/Tablo";

function App() {
  const maxValue = 5;
  const minValue = 0;

  const [count, setCount] = useState(minValue);

  const incrementClick = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const resetClick = () => {
    setCount(0);
  };

  const isDisabledBtnInc = count >= maxValue;
  const isDisabledBtnReset = count === minValue;

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
