import React from 'react';
import {Timer, Journal} from '../';
import './Pomodoro.css';


export function Pomodoro() {
  return (
    <div id="App">
      <h1 id='title'>pomodoro</h1>
      <Timer />
      <Journal />
    </div>
  );
}
