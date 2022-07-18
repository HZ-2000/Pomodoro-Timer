import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Pomodoro } from './components/Pomodoro/Pomodoro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Pomodoro />
  </React.StrictMode>
);
