import React, { useState } from "react";
import { Button } from "reactstrap";
import "./App.css";

function App() {
  //defining the state of light (0 or 1)
  const [isRightGreenLit, setIsRightGreenLit] = useState(true);

  return (
    <div className="App">
      <h1 className="header">Swap lights</h1>
      <Lights state={isRightGreenLit} />
      <SwapButton state={isRightGreenLit} setState={setIsRightGreenLit} />
    </div>
  );
}

const Lights = (props) => {
  return (
    <div className="light-row">
      <div className="light-container">
        {/* conditional styling */}
        <div className={`light-frame ${props.state ? "" : "dim"}`}>
          <div className={`light-red ${props.state ? "lit" : ""}`}></div>
        </div>
        <div className={`light-frame ${props.state ? "dim" : ""}`}>
          <div className={`light-green ${props.state ? "" : "lit"}`}></div>
        </div>
      </div>
      <div className="light-container">
        <div className={`light-frame ${props.state ? "dim" : ""}`}>
          <div className={`light-red ${props.state ? "" : "lit"}`}></div>
        </div>

        <div className={`light-frame ${props.state ? "" : "dim"}`}>
          <div className={`light-green ${props.state ? "lit" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

const SwapButton = (props) => {
  const swapColors = () => {
    props.state ? props.swapColors(false) : props.swapColors(true);
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
