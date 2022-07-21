import React, { useEffect, useState } from 'react';
import './Timer.css';


var timerState = {
  'sec': 10,
  'min': 0,
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
          toggleTimer(false);
          var poms = parseInt(localStorage.getItem('Pomodoros') || '0');
          localStorage.setItem('Pomodoros', String(poms + 1));
          reset();
          return () => clearInterval(timer);
        }
        else{
          timerState.min -= 1;
          timerState.sec = 60;
        }
      }

      updateTime((timerState.min >= 10 ? timerState.min : '0' + timerState.min) + ':' + (timerState.sec >= 10 ? timerState.sec : '0' + timerState.sec));
      timerState.sec -= 1;
    }, 1000);

    return () => clearInterval(timer);
  }, [ticking]);

  const reset = () => {
    timerState.min = 25;
    timerState.sec = 0;
    updateTime((timerState.min >= 10 ? timerState.min : '0' + timerState.min) + ':' + (timerState.sec >= 10 ? timerState.sec : '0' + timerState.sec));
  }

  return (
    <div id='Timer'>
      <span id='time'>{time}</span>
      <div id='buttons'>
        <button onClick={() => toggleTimer(!ticking)}>
          {ticking ? "Stop" : "Start"}
        </button>
        <button onClick={() => reset()}>
          Reset
        </button>
      </div>
    </div>
  );
}
