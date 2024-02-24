import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StockProvider } from '@providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StockProvider>
      <App />
    </StockProvider>
  </React.StrictMode>,
);
