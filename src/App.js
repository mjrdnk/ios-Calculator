import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(1000);

  return (
    <div className="Calculator">
      <div className="Result">
        <p>{result}</p>
      </div>
      <div className="Controls-section">
        <div className="Controls">
          <div
            className="Button Options Options-1"
            onClick={function() {
              setResult(0);
            }}
          >
            <span>c</span>
          </div>
          <div className="Button Options Options-2">
            <span>+/-</span>
          </div>
          <div className="Button Options Options-3">
            <span>%</span>
          </div>

          <div className="Button Numbers Numbers-1">
            <span>7</span>
          </div>
          <div className="Button Numbers Numbers-2">
            <span>8</span>
          </div>

          <div className="Button Numbers Numbers-3">
            <span>9</span>
          </div>

          <div className="Button Numbers Numbers-4">
            <span>4</span>
          </div>

          <div className="Button Numbers Numbers-5">
            <span>5</span>
          </div>

          <div className="Button Numbers Numbers-6">
            <span>6</span>
          </div>

          <div className="Button Numbers Numbers-7">
            <span>1</span>
          </div>

          <div className="Button Numbers Numbers-8">
            <span>2</span>
          </div>

          <div className="Button Numbers Numbers-9">
            <span>3</span>
          </div>

          <div className="Button Numbers Numbers-10 Double-Button">
            <span>0</span>
          </div>

          <div className="Button Numbers Numbers-11">
            <span>,</span>
          </div>
          <div className="Button Operations Operations-1">
            <span>/</span>
          </div>
          <div className="Button Operations Operations-2">
            <span>*</span>
          </div>
          <div className="Button Operations Operations-3">
            <span>-</span>
          </div>
          <div className="Button Operations Operations-4">
            <span>+</span>
          </div>
          <div className="Button Operations Operations-5">
            <span>=</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
