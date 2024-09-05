import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Tablo } from "./components/Tablo";

function App() {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    let value = count;
    setCount((value = count + 1));
  };

  const resetClick = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Tablo count={count} />
      <div className="Block">
        <Button title={"inc"} onClick={incrementClick} className={"Btn"} />
        <Button title={"reset"} onClick={resetClick} className={"Btn"} />
      </div>
    </div>
  );
}

export default App;
