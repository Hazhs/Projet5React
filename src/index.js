import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.scss';
import AppRouter from './Components/AppRouter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <AppRouter />
    </div>
  </React.StrictMode>
);
