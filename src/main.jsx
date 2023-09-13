import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import DetailPage from './components/routes/detail-page';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokemon/:name" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);