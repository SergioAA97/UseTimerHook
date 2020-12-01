# UseTimerHook
A simple custom hook for React. 

I wanted a simple component with no visual components attached for my projects. I needed the timer to be precise and to continue counting even if the window loses focus.

It can easely be used in a functional component, like so:
```javascript
import React, { useState, useEffect } from "react";
import { useTimer } from "./useTimer";

export default function App() {
  const [time, startTimer, stopTimer, resetTimer] = useTimer();

  return (
    <div>
      <h1>Timer</h1>
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
      <button onClick={startTimer}> Start/Resume </button>
      <button onClick={stopTimer}> Stop </button>
      <button onClick={resetTimer}> Reset </button>
    </div>
  );
}
```
Example on Code Sandbox:
https://codesandbox.io/s/floral-voice-8ncsg

