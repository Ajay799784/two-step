import React, { useContext } from "react";
import FirstStep from "./Components/FirstStep";

import ThirdStep from "./Components/ThirdStep";
import { multiStepContext } from "./StepContext";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import "./App.css";
import DisplayData from "./Components/DisplayData";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;

      case 2:
        return <ThirdStep />;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ color: "red", textDecoration: "underline" }}>
          Two-step user Registration form
        </h3>
        <div className="center-stepper">
          <Stepper
            className="center-stepper"
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        {finalData.length > 0 ? <DisplayData /> : ""}
      </header>
    </div>
  );
}

export default App;
