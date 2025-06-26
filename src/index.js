import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { AppProvider } from './context/AppContext';
import List from './components/List';
import Details from './components/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>


        <Routes>
        <Route path="/" element={<List />} />
         <Route path="/book/:id" element={<Details />} />
       </Routes>

       
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
