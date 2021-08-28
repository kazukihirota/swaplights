import React, { useState } from "react";
import { Button } from "reactstrap";
import "./App.css";

function App() {
  //defining the state of light (0 or 1)
  //when the state is 0, left side of the green light is lit
  //when the state is 1, right side of the green light is lit
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <h1 className="header">Swap lights</h1>
      <Lights state={state} />
      <SwapButton state={state} swapColors={setState} />
    </div>
  );
}

const Lights = (props) => {
  return (
    <div className="light-row">
      <div className="light-container">
        {/* conditional styling */}
        <div className={`light-frame ${props.state === 0 ? "" : "dim"}`}>
          <div className={`light-red ${props.state === 0 ? "lit" : ""}`}></div>
        </div>
        <div className={`light-frame ${props.state === 0 ? "dim" : ""}`}>
          <div
            className={`light-green ${props.state === 0 ? "" : "lit"}`}
          ></div>
        </div>
      </div>
      <div className="light-container">
        <div className={`light-frame ${props.state === 0 ? "dim" : ""}`}>
          <div className={`light-red ${props.state === 0 ? "" : "lit"}`}></div>
        </div>

        <div className={`light-frame ${props.state === 0 ? "" : "dim"}`}>
          <div
            className={`light-green ${props.state === 0 ? "lit" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SwapButton = (props) => {
  const swapColors = () => {
    props.state === 0 ? props.swapColors(1) : props.swapColors(0);
  };
  return (
    <div>
      <Button color="danger" onClick={() => swapColors()}>
        Swap color
      </Button>
    </div>
  );
};
export default App;
