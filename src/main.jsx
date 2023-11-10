import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Clock.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Clock locale='bn-BD' />
  </React.StrictMode>,
)
