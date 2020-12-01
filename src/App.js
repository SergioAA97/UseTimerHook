import React, { useState, useEffect } from "react";
import { useTimer } from "./useTimer";
import "./styles.css";

export default function App() {
  const [time, startTimer, stopTimer, resetTimer] = useTimer();

  return (
    <div className="App">
      <h1>Timer</h1>
      <TimeSlot value={time} label="ms" />
      <button onClick={startTimer}> Start/Resume </button>
      <button onClick={stopTimer}> Stop </button>
      <button onClick={resetTimer}> Reset </button>
    </div>
  );
}

const TimeSlot = ({ value, label }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "2rem",
        flexDirection: "column",
        margin: "1rem"
      }}
    >
      <div>{value}</div>
      <div>{label}</div>
    </div>
  );
};
