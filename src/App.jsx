import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleInput(e) {
    setInput(input + e.target.value);
  }

  function calculate() {
    setResult(eval(input));
  }

  function clear() {
    setInput("");
    setResult("");
  }

  return (
    <>
      <div className="one" >
        <h1>Design by <a href="https://www.linkedin.com/in/aliabdo6/">Ali Abdo </a></h1>
        <h2>Calculator App</h2>
      </div>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly />
        <div className="row">
          <button className="operator" onClick={clear}>
            C
          </button>
          <button className="operator" onClick={handleInput} value="/">
            /
          </button>
          <button className="operator" onClick={handleInput} value="*">
            *
          </button>
          <button className="operator" onClick={handleInput} value="-">
            -
          </button>
        </div>
        <div className="row">
          <button onClick={handleInput} value="7">
            7
          </button>
          <button onClick={handleInput} value="8">
            8
          </button>
          <button onClick={handleInput} value="9">
            9
          </button>
          <button className="operator" onClick={handleInput} value="+">
            +
          </button>
        </div>
        <div className="row">
          <button onClick={handleInput} value="4">
            4
          </button>
          <button onClick={handleInput} value="5">
            5
          </button>
          <button onClick={handleInput} value="6">
            6
          </button>
        </div>
        <div className="row">
          <button onClick={handleInput} value="1">
            1
          </button>
          <button onClick={handleInput} value="2">
            2
          </button>
          <button onClick={handleInput} value="3">
            3
          </button>
        </div>
        <div className="row">
          <button onClick={handleInput} value="0">
            0
          </button>
          <button onClick={handleInput} value=".">
            .
          </button>
          <button className="equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
