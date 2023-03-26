import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [temperatureValue, settemperatureValue] = useState(18);
  const [temperatureColor, settemperatureColor] = useState("cold");

  const temperatureReduce = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 20) {
      settemperatureColor("cold");
    }
    settemperatureValue(newTemperature);
  };

  const temperatureIncrease = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 20) {
      settemperatureColor("hot");
    }
    settemperatureValue(newTemperature);
  };

  // const temperatureColor = () => {}
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {" "}
          {temperatureValue} C{" "}
        </div>
      </div>
      <div className="button-container">
        <button onClick={temperatureReduce}>-</button>
        <button onClick={temperatureIncrease}>+</button>
      </div>
    </div>
  );
};

export default App;
