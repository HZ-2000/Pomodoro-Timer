import React from 'react';
import {Timer, Journal} from '../';
import './Pomodoro.css';


export function Pomodoro() {

  localStorage.setItem('Pomodoros', '0');

  return (
    <div id="App">
      <h1>Pomodoro</h1>
      <Timer />
      <Journal />
    </div>
  );
}
