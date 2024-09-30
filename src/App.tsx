import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { CounterSettings } from "./components/CounterSettings";

function App() {
  return (
    <div className="App">
      <CounterSettings/>
      <Counter />
    </div>
  );
}

export default App;
