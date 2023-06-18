import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CustomProvider } from './components/ContextApi';
import Head from './components/Head';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head/>
    <CustomProvider />
  </React.StrictMode>
);

reportWebVitals();
