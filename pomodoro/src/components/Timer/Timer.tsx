import React, { useEffect, useState } from 'react';
import './Timer.css';


var timerState = {
  'sec': 0,
  'min': 25,
  'pomodoros': 0,
  'isBreak': false
}


export function Timer() {
  const [time, updateTime] = useState('00:00');
  const [ticking, toggleTimer] = useState(false); 

  useEffect(() => {
    let timer: any = setInterval(() => {
      if(!ticking){
        return () => clearInterval(timer);
      }

      if (timerState.sec === 0) {
        if(timerState.min === 0){
          timerState.isBreak = !timerState.isBreak;
          toggleTimer(false);
          timerState.pomodoros += 1;
          reset();
          return () => clearInterval(timer);
        }
        else{
          timerState.min -= 1;
          timerState.sec = 59;
        }
      }

      updateTime((timerState.min >= 10 ? timerState.min : '0' + timerState.min) + ':' + (timerState.sec >= 10 ? timerState.sec : '0' + timerState.sec));
      timerState.sec -= 1;
    }, 1000);

    return () => clearInterval(timer);
  }, [ticking]);

  const reset = () => {
    if(timerState.isBreak){
      if((timerState.pomodoros % 3) === 0 && timerState.pomodoros !== 0){
        timerState.min = 30;
        timerState.sec = 0;
      }
      else{
        timerState.min = 5;
        timerState.sec = 0;
      }
    }
    else{
      timerState.min = 25;
      timerState.sec = 0;
    }
    updateTime((timerState.min >= 10 ? timerState.min : '0' + timerState.min) + ':' + (timerState.sec >= 10 ? timerState.sec : '0' + timerState.sec));
  }

  return (
    <div id='Timer'>
      <h1 id='status'>{timerState.isBreak ? 'break':'working'}</h1>
      <span id='time'>{time}</span>
      <div id='buttons'>
        <button onClick={() => toggleTimer(!ticking)}>
          {ticking ? "stop" : "start"}
        </button>
        <button onClick={() => reset()}>
          reset
        </button>
      </div>
      <p>poms complete: {timerState.pomodoros}</p> 
      <p>next big break in: {3 - (timerState.pomodoros % 3)}</p>
    </div>
  );
}
