import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chatbot from './pages/Chatbot';
import History from './pages/History';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path='/history' element={<History />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
}

export default App;
