import React, { useState } from "react";
import { Button } from "reactstrap";
import "./App.css";

function App() {
  //defining the state of light
  const [isRightGreenLit, setIsRightGreenLit] = useState(true);

  return (
    <div className="App">
      <h1 className="header">Swap lights</h1>
      <Lights state={isRightGreenLit} />
      <SwapColorButton state={isRightGreenLit} setState={setIsRightGreenLit} />
    </div>
  );
}

const Lights = (props) => {
  return (
    <div className="light-row">
      <div className="light-container">
        {/* conditional styling */}
        <div className={`light-red ${props.state ? "lit" : ""}`}></div>
        <div className={`light-green ${props.state ? "" : "lit"}`}></div>
      </div>
      <div className="light-container">
        <div className={`light-red ${props.state ? "" : "lit"}`}></div>
        <div className={`light-green ${props.state ? "lit" : ""}`}></div>
      </div>
    </div>
  );
};

const SwapColorButton = (props) => {
  //function to swap colors
  const swapColors = () => {
    props.state ? props.setState(false) : props.setState(true);
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
